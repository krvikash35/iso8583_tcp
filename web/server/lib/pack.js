'use strict'
var configlib = require('./config');
var convlib = require('./convert');
var logService = require('../logService');

var packlib = {
    req_init_gen_bitmap: req_init_gen_bitmap,
    req_encode_request_fields: req_encode_request_fields,
    req_add_header: req_add_header
}
module.exports = packlib;


function req_init_gen_bitmap(prop) {
    var iso8583_msg = {
        request: {
            field_no_present: [],
            string_data: {},
            encoded_data: {},
            final_buffer: ''
        },
        response: {
          final_buffer: '',
          string_data: {}
        }
    }

    return new Promise(function(fulfill, reject) {
        logService.logEvent("packlib.init_and_gen_bitmap..set user specific profile/properties");
        // console.log("Befor: ", configlib.read_config("per_log_level") );
        configlib.update_prop(prop);
        // console.log("After: ", configlib.read_config("per_log_level") );
        iso8583_msg.request.string_data = configlib.read_config('per_req_data');
        let bitmap_bin = "";
        let bitmap_hex = "";
        let isSecBitPresent = false;
        let reqData = iso8583_msg.request.string_data;
        logService.logEvent("packlib.init_and_gen_bitmap..generating bitmap")
        if (iso8583_msg.request.string_data.f0) {
            iso8583_msg.request.field_no_present.push(0);
        }
        for (var i = 2; i <= 128; i++) { //[-1 header, 0 mti notTechnicallyFieldNo], 1 bitmap(pri and sec), 2..128 dataField,
            if (reqData["f" + i]) {
                if (i >= 65) {
                    isSecBitPresent = true;
                }
                bitmap_bin = bitmap_bin + "1"
                iso8583_msg.request.field_no_present.push(i)
            } else {
                bitmap_bin = bitmap_bin + "0"
            }
        }
        if (isSecBitPresent) {
            bitmap_bin = "1" + bitmap_bin;
        } else {
            bitmap_bin = "0" + bitmap_bin.substr(0, 63);
        }
        logService.logEvent("packlib.init_and_gen_bitmap..bitmap generated '" + bitmap_bin + "'");
        bitmap_hex = convlib.bitohex(bitmap_bin);
        iso8583_msg.request.string_data.f1 = bitmap_hex;
        iso8583_msg.request.field_no_present.push(1);
        iso8583_msg.request.field_no_present.sort(numComparator)
        logService.logInfo("packlib.init_and_gen_bitmap.iso8583_msg:", iso8583_msg)
        fulfill(iso8583_msg);
    })
}

function getFieldDetForEnc(fn, fvalue) {
    let fdet = {
        fvalue: fvalue,
        fenc: "ascii"
    }
    let fenc, flen, flentype;
    if ((fn >= 2 && fn <= 128) || fn == 0) {
        fn == 0 ? fenc = configlib.read_config("cli_enc_mti") : fenc = configlib.read_config("cli_enc_fld");
        flentype = configlib.read_config("cli_fldn_ltype", fn);
        if (flentype == 0) {
            fdet.fvalue = fvalue;
        } else {
            fdet.fvalue = pad(fvalue.length, flentype, "l", "0") + fvalue;
        }
        fdet.fenc = fenc;
        return fdet;
    } else if (fn == -1) {
        fenc = configlib.read_config("cli_enc_hdr");
        flen = configlib.read_config("cli_hdr_len")
        switch (fenc) {
            case "ascii":
                fvalue = pad(fvalue, flen, 'l', '0');
                fdet.fvalue = fvalue;
                fdet.fenc = "ascii";
                return fdet;
                break;
            case "hex":
                fvalue = pad(fvalue, flen * 2, 'l', '0');
                fdet.fvalue = fvalue;
                fdet.fenc = "hex";
                return fdet;
                break;
            case "chexehex":
                fvalue = convlib.decitohex(fvalue);
                fvalue = pad(fvalue, flen * 2, 'l', '0');
                fdet.fvalue = fvalue;
                fdet.fenc = "hex";
                return fdet;
                break;
            case "chexeascii":
                fvalue = convlib.decitohex(fvalue);
                fvalue = pad(fvalue, flen, 'l', '0');
                fdet.fvalue = fvalue;
                fdet.fenc = "ascii";
                return fdet;
                break;
        }
    } else if (fn == 1) {
        fenc = configlib.read_config("cli_enc_bit");
        fdet.fvalue = fvalue;
        fdet.fenc = fenc;

        return fdet;
    } else {
        throw new Error("packlib.getFieldDetForEnc..invalid field number '" + fn + "' provided while reading config!")
    }

}

function req_encode_request_fields(iso8583_msg) {
    logService.logEvent("packlib.req_encode_request_fields...encode each field one by one")
    var iso = iso8583_msg;
    var flist = iso.request.field_no_present;
    var fdata = iso.request.string_data;
    return new Promise(function(fulfill, reject) {
        for (var i = 0; i < flist.length; i++) {
            logService.logEvent("packlib.req_encode_request_fields...encoding field '" + flist[i] + "'")
            let fdet = getFieldDetForEnc(flist[i], fdata["f" + flist[i]]);
            logService.logInfo("packlib.req_encode_request_fields...encoding detail for field '" + flist[i] + "':", fdet)
            let buff = Buffer.from(fdet.fvalue, fdet.fenc);
            iso.request.encoded_data["f" + flist[i]] = buff;
        }
        fulfill(iso);
    })
}

function req_add_header(iso8583_msg) {

    return new Promise(function(fulfill, reject) {
      logService.logEvent("packlib.req_add_header...add header and prepare final buffer msg!")
        let msg_buffer = [];
        let msg_buffer_len = 0;
        let iso = iso8583_msg;
        let flist = iso.request.field_no_present;
        let ishdrincl = configlib.read_config("cli_hdr_encl");
        let arrSize = ishdrincl ? flist.length + 1: flist.length;
        let sindex = ishdrincl ? 1:   0;
        var fdatabuf = iso.request.encoded_data;

        // console.log(iso);
        for (var i = 0; i < flist.length; i++) {
          // console.log(fdatabuf["f" + flist[i]]);
            msg_buffer_len = msg_buffer_len + fdatabuf["f" + flist[i]].length
            msg_buffer[sindex] = fdatabuf["f" + flist[i]]
            sindex = sindex + 1;
        }
        logService.logEvent("packlib.req_add_header...msg buffer length is "+msg_buffer_len+" Bytes!");

        if (ishdrincl) {
          logService.logEvent("packlib.req_add_header...as per configuration header has to be included, so calculating header value!")
            if (configlib.read_config("cli_hdr_msg")) {
                msg_buffer_len = msg_buffer_len + configlib.read_config("cli_hdr_len");
                logService.logEvent("packlib.req_add_header...header length also included in header value, so header value is "+msg_buffer_len);
            }else {
              logService.logEvent("packlib.req_add_header..only msg length included in header value, so header value is "+msg_buffer_len);
            }
            let fdet = getFieldDetForEnc(-1, msg_buffer_len);
            let hdrbuf = Buffer.from(fdet.fvalue, fdet.fenc);
            msg_buffer[0] = hdrbuf;
        }else {
          logService.logEvent("packlib.req_add_header...as per configuration dont include header, so header will not be sent!")
        }
        iso.request.final_buffer = Buffer.concat(msg_buffer, msg_buffer_len);
        fulfill(iso);
    })
}
