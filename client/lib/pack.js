var prop = require('../prop');
var convlib = require('./convert')
var fconfig = require('../data/field_config');
var enclib = require('./encode');
var fldlib = require('./field');
var loglib = require('./loglib')

var packlib = {
    init_and_gen_bitmap: init_and_gen_bitmap,
    pad_field_per_iso8583: pad_field_per_iso8583,
    encode_msg_per_iso8583: encode_msg_per_iso8583,
    cal_and_add_header: cal_and_add_header
}
module.exports = packlib;


function init_and_gen_bitmap(iso8583_msg) {
    loglib.print_debug_msg('entered init_and_gen_bitmap');
    var result = "";
    loglib.print_debug_msg('Going to get field data')
    var field_data = fldlib.get_fld_data();
    loglib.print_debug_msg('Got below field data: ', field_data);
    loglib.print_debug_msg('checking for presence of mti');
    if (!field_data["f0"]) {
        loglib.print_err_msg('MTI at field 0 not present')
    } else {
        loglib.print_debug_msg('found mti')
    }
    iso8583_msg.iso8583_msg_req_origated[0] = field_data["f0"];
    iso8583_msg.field_no_present[0] = 0;

    var isSecBitPresent = false;
    var index = 2;
    loglib.print_debug_msg('Going to iterate over to check presence of field and generate bitmap')
    if (prop.iso_version == '1987' || prop.iso_version == '1993') {
        for (var i = 2; i <= 128; i++) {
            if (field_data["f" + i]) {
                loglib.print_debug_msg('field no ' + i + ' found')
                iso8583_msg.iso8583_msg_req_origated[index] = field_data["f" + i];
                iso8583_msg.field_no_present[index] = i;
                index = index + 1;
                if (i >= 65) {
                    loglib.print_debug_msg('secondory bit to be present')
                    isSecBitPresent = true;
                }
                result = result + "1";
            } else {
                result = result + "0";
            }
        }
        loglib.print_debug_msg('generating final bitmap ')
        if (isSecBitPresent) {
            result = "1" + result;
        } else {
            result = "0" + result.substr(0, 63)
        }
        loglib.print_debug_msg('generated final bitmap')
    }
    iso8583_msg.iso8583_msg_req_origated[1] = convlib.bitohex(result);
    //iso8583_msg.iso8583_msg_req_origated[1] = result;
    iso8583_msg.field_no_present[1] = 1;
    loglib.print_debug_msg('exiting from init_and_gen_bitmap')
}

function pad_field_per_iso8583(msg) {
    var field_padded;
    var fldpre = msg.field_no_present

    for (var i = 0; i < fldpre.length; i++) {
        var fn = fldpre[i]
        var fv = msg.iso8583_msg_req_origated[i]
        var fcl = msg.iso8583_msg_req_origated[i].length
        var fml = fldlib.get_fld_len_max(fn);
        var ft = fldlib.get_fld_type(fn);
        var flt = fldlib.get_fld_len_type(fn);
        loglib.print_debug_msg("ValidateAndPadd FieldNo: "+fn+" FieldValue: "+fv+ " FieldType: "+ft+" FieldMaxLength: "+fml+" FieldLenType: "+flt);
        if (fcl > fml && flt != 'CONTVAR') {
            loglib.print_err_msg("Field_No: "+fn+" with value: "+fv+" and current_len: "+fcl+" crossed max allowed length: "+fml);
        }
        if (flt == 'FIXED') {
            if (fldlib.get_fld_is_num_type(fn)) {
                loglib.print_debug_msg("FieldNo: "+fn+" is of NUMBERTYPE and will pe left padded with CHAR "+"'0'");
                msg.iso8583_msg_req_paded[i] = fldlib.set_fld_padchar(fv, '0', fml - fcl, false);
            } else {
                loglib.print_debug_msg("FieldNo: "+fn+" is of NON-NUMBERTYPE and will pe right padded with CHAR "+"' '");
                msg.iso8583_msg_req_paded[i] = fldlib.set_fld_padchar(fv, ' ', fml - fcl, true);
            }
        } else {
            msg.iso8583_msg_req_paded[i] = fv;
        }

    }
}

function encode_msg_per_iso8583(iso8583_msg) {
    var field_encoded;
    var fv, fn, ft, flt, flm, flhe;
    for (var i = 0; i < iso8583_msg.field_no_present.length; i++) {
        fv = iso8583_msg.iso8583_msg_req_paded[i];
        fn = iso8583_msg.field_no_present[i]
        flm = fldlib.get_fld_len_max(fn);
        ft = fldlib.get_fld_type(fn);
        flt = fldlib.get_fld_len_type(fn);
        fenc = fldlib.get_encode_format(fn);
        fhenc = fldlib.get_encode_format(fn, "llvar");
        if (flt == 'FIXED') {
            console.log("Encode: FieldNo: %s FieldVal: %s FieldMaxLen: %s FieldType: %s FieldLenType: %s FieldEncFrmt: %s ", fn, fv, flm, ft, flt, fenc);
        } else {
            console.log("Encode: FieldNo: %s FieldVal: %s FieldMaxLen: %s FieldType: %s FieldLenType: %s FieldEncFrmt: %s LLVAREncFrmt: %s", fn, fv, flm, ft, flt, fenc, fhenc);
        }
        field_encoded = enclib.encode_field(fv, fenc, flt, flm, fhenc);
        iso8583_msg.iso8583_msg_req_encoded[i] = field_encoded;
    }
}

function cal_and_add_header(iso8583_msg) {
    var msglen = 0;
    var headlen = prop.header_len;
    var totallen = 0;
    for (var i = 0; i < iso8583_msg.field_no_present.length; i++) {
        msglen = msglen + iso8583_msg.iso8583_msg_req_encoded[i].length;
    }
    if (prop.include_header) {
        if (prop.include_header_for_msglen_cal) {
            totallen = headlen + msglen;
        } else {
            totallen = msglen;
        }
        var totallen_str = totallen.toString()
        var msg_buffer = Buffer.concat(iso8583_msg.iso8583_msg_req_encoded, msglen);
        var headBuffer = Buffer.alloc(headlen);
        switch (prop.encode.header_encode) {
            case "hex":
                if (totallen_str.length > headlen * 2) {
                    console.log("given value %s is not possible to write in %s byte header with encoding: %s", totallen_str, headlen, prop.encode.header_encode);
                    process.exit();
                }
                if (totallen_str.length != headlen * 2) {
                    var pad_char_no = headlen * 2 - totallen_str.length;
                    totallen_str = fldlib.set_fld_padchar(totallen_str, '0', pad_char_no, false);
                }
                headBuffer.write(totallen_str, 0, headlen, 'hex');
                break;
            case "ascii":
                if (totallen_str.length > headlen) {
                    console.log("given value %s is not possible to write in %s byte header with encoding: %s", totallen_str, headlen, prop.encode.header_encode);
                    process.exit();
                }
                if (totallen_str.length != headlen) {
                    var pad_char_no = headlen - totallen_str.length;
                    totallen_str = fldlib.set_fld_padchar(totallen_str, '0', pad_char_no, false);
                }
                headBuffer.write(totallen_str, 0, headlen, 'ascii');
                break;
            case "chexehex":
                totallen_str = convlib.decitohex(totallen_str);
                if (totallen_str.length > headlen * 2) {
                    console.log("given value after decitohex conversion %s is not possible to write in %s byte header with encoding: %s", totallen_str, headlen, prop.encode.header_encode);
                    process.exit();
                }
                if (totallen_str.length != headlen * 2) {
                    var pad_char_no = headlen * 2 - totallen_str.length;
                    totallen_str = fldlib.set_fld_padchar(totallen_str, '0', pad_char_no, false);
                }
                headBuffer.write(totallen_str, 0, headlen, 'hex');
                break;
            case "chexeascii":
                totallen_str = convlib.decitohex(totallen_str);
                if (totallen_str.length > headlen) {
                    console.log("given value after decitohex conversion %s is not possible to write in %s byte header with encoding: %s", totallen_str, headlen, prop.encode.header_encode);
                    process.exit();
                }
                if (totallen_str.length != headlen) {
                    var pad_char_no = headlen - totallen_str.length;
                    totallen_str = fldlib.set_fld_padchar(totallen_str, '0', pad_char_no, false);
                }
                headBuffer.write(totallen_str, 0, headlen, 'ascii');
                break;
            default:
                console.log("invalid header encoding");
                process.exit();
        }
        console.log("header encoding: header_length: %s decimal_value: %s encoding_format: %s encoding_value: %s", headlen, totallen, prop.encode.header_encode, totallen_str);
        iso8583_msg.iso8583_msg_req_final = Buffer.concat([headBuffer, msg_buffer], headlen + msglen);
    } else {
        iso8583_msg.iso8583_msg_req_final = Buffer.concat(iso8583_msg.iso8583_msg_req_encoded, msglen)
        totallen = 0;
    }
    console.log("HEADER BYTE LENGTH: %d\nMESSAGE BYTE LENGTH: %d\nVALUE PUT IN HEADER: %d\n", headlen, msglen, totallen);

}
