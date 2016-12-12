var loglib = require('./loglib');
var configlib = require('./configlib');
var convlib = require('./convert');

var packlib = {
    init_and_gen_bitmap: init_and_gen_bitmap,
    pad_field_per_iso8583: pad_field_per_iso8583,
    encode_msg_per_iso8583: encode_msg_per_iso8583,
    cal_and_add_header: cal_and_add_header
}
module.exports = packlib;


function init_and_gen_bitmap(iso8583_msg) {
    loglib.print_debug_msg('entered init_and_gen_bitmap, reading user data..');
    var isSecBitPresent = false;
    var index = 2;
    var bitmap = "";
    var bitmap_hex = "";
    var usr_data = configlib.read_config("usr_data");
    loglib.print_debug_msg('user data: ', usr_data);

    loglib.print_debug_msg('checking for presence of mti');
    if (iszerolen(usr_data["f0"])) {
        loglib.print_err_msg('MTI at field 0 not present')
    } else {
        loglib.print_debug_msg('found mti')
    }
    iso8583_msg.iso8583_msg_req_origated[0] = usr_data["f0"];
    iso8583_msg.field_no_present[0] = 0;

    loglib.print_debug_msg('Going to iterate over to check presence of field and generate bitmap')
    for (var i = 2; i <= 128; i++) {
        if (usr_data["f" + i]) {
            loglib.print_debug_msg('field no ' + i + ' found')
            iso8583_msg.iso8583_msg_req_origated[index] = usr_data["f" + i];
            iso8583_msg.field_no_present[index] = i;
            index = index + 1;
            if (i >= 65) {
                loglib.print_debug_msg('secondory bit to be present')
                isSecBitPresent = true;
            }
            bitmap = bitmap + "1";
        } else {
            bitmap = bitmap + "0";
        }
    }
    loglib.print_debug_msg('generating final bitmap ')
    if (isSecBitPresent) {
        bitmap = "1" + bitmap;
    } else {
        bitmap = "0" + bitmap.substr(0, 63)
    }
    loglib.print_debug_msg('generated final bitmap: ' + bitmap);
    bitmap_hex = convlib.bitohex(bitmap);
    loglib.print_debug_msg('generated final bitmap[hex]: ' + bitmap_hex);
    iso8583_msg.iso8583_msg_req_origated[1] = bitmap_hex;;
    iso8583_msg.field_no_present[1] = 1;
    loglib.print_debug_msg('exiting from init_and_gen_bitmap')
}

function pad_field_per_iso8583(msg) {
    loglib.print_debug_msg("entered pad_field_per_iso8583:");
    var field_padded;
    var fldpre = msg.field_no_present

    for (var i = 0; i < fldpre.length; i++) {
        var fn = fldpre[i]
        var fv = msg.iso8583_msg_req_origated[i]
        var fcl = msg.iso8583_msg_req_origated[i].length
        var fml = configlib.read_config("cli_fldn_max", fn);
        var ft = configlib.read_config("cli_fldn_type", fn);
        var flt = configlib.read_config("cli_fldn_ltype", fn);
        loglib.print_debug_msg("ValidateAndPadd FieldNo: " + fn + " FieldValue: " + fv + " FieldType: " + ft + " FieldMaxLength: " + fml + " FieldLenType: " + flt);
        if (fcl > fml && flt != 'CONTVAR') {
            loglib.print_err_msg("Field_No: " + fn + " with value: " + fv + " and current_len: " + fcl + " crossed max allowed length: " + fml);
        }
        if (flt == 'FIXED') {
            if (ft == 'N') {
                loglib.print_debug_msg("FieldNo: " + fn + " is of NUMBERTYPE and will pe left padded with CHAR " + "'0'");
                msg.iso8583_msg_req_paded[i] = pad(fv, fml, 'l', '0');
            } else {
                loglib.print_debug_msg("FieldNo: " + fn + " is of NON-NUMBERTYPE and will pe right padded with CHAR " + "' '");
                msg.iso8583_msg_req_paded[i] = pad(fv, fml, 'r', ' ');
            }
        } else {
            msg.iso8583_msg_req_paded[i] = fv;
        }
    }
    loglib.print_debug_msg("exited pad_field_per_iso8583:");
}

function get_fieldno_encformat(fn) {
    if (fn == -1) {
        return configlib.read_config("cli_enc_hdr");
    }
    if (fn == 0) {
        return configlib.read_config("cli_enc_mti");
    }
    if (fn == 1) {
        return configlib.read_config("cli_enc_bit");
    }
    return configlib.read_config("cli_enc_fld");
}

function encode_msg_per_iso8583(iso8583_msg) {
    var fv, fn, ft, flt, flm, flhe;
    for (var i = 0; i < iso8583_msg.field_no_present.length; i++) {
      var field_buffer_ret = {
          field_head_buffer: 0,
          field_head_len: 0,
          field_body_buffer: null,
          field_body_len: null,
          field_whole_buffer: null,
          field_enc: null
      };
        fv = iso8583_msg.iso8583_msg_req_paded[i];
        fn = iso8583_msg.field_no_present[i]

        var fml = configlib.read_config("cli_fldn_max", fn);
        var ft = configlib.read_config("cli_fldn_type", fn);
        var flt = configlib.read_config("cli_fldn_ltype", fn);

        flm = configlib.read_config("cli_fldn_max", fn);
        ft = configlib.read_config("cli_fldn_type", fn);
        flt = configlib.read_config("cli_fldn_ltype", fn);
        fenc = get_fieldno_encformat(fn);
        loglib.print_debug_msg("encode_msg_per_iso8583: FieldNo: " + fn + " FieldVal: " + fv + " FieldMaxLen: " + flm + " FieldType: " + ft + "FieldLenType: " + flt + " FieldEncFrmt: " + fenc);
        switch (flt) {
            case "CONTVAR":
                var buf = Buffer.from(fv, fenc);
                field_buffer_ret.field_body_buffer = buf;
                field_buffer_ret.field_body_len = buf.length;
                field_buffer_ret.field_whole_buffer = buf;
                field_buffer_ret.field_enc = fenc;
                field_buffer_ret.field_value = fv;
                iso8583_msg.iso8583_msg_req_encoded[i] = field_buffer_ret;
                loglib.print_debug_msg('wrote: ', field_buffer_ret);
                break;
            case "FIXED":
                var buf = Buffer.from(fv, fenc);
                field_buffer_ret.field_body_buffer = buf;
                field_buffer_ret.field_body_len = buf.length;
                field_buffer_ret.field_whole_buffer = buf;
                field_buffer_ret.field_enc = fenc;
                field_buffer_ret.field_value = fv;
                iso8583_msg.iso8583_msg_req_encoded[i] = field_buffer_ret;
                loglib.print_debug_msg('wrote: ', field_buffer_ret);
                break;
            default:
                var varlen = flt.indexOf('V')
                var fieldBuffer = Buffer.from(fv, fenc)
                field_buffer_ret.field_body_buffer = fieldBuffer;
                field_buffer_ret.field_body_len = fieldBuffer.length;
                field_buffer_ret.field_enc = fenc;
                field_buffer_ret.field_value = fv;
                var field_head_val_str = fieldBuffer.length.toString();
                var field_head_val_num = fieldBuffer.length;
                // var max_head_val= parseInt(pad("9",varlen,'r',"9"));
                // if ( (field_head_val_num < 1 ) || ( field_head_val_num > max_head_val ) ) {
                //     loglib.print_err_msg('LLVAR header should be between 0 and " + max_head_val+ " but currently is ' + field_head_val_num)
                // }
                fhval = pad(field_head_val_str, varlen, 'l', '0');
                var field_head_buffer = Buffer.from(fhval, fenc)
                var buf = Buffer.concat([field_head_buffer, fieldBuffer], field_head_buffer.length + fieldBuffer.length);
                field_buffer_ret.field_head_buffer = field_head_buffer;
                field_buffer_ret.field_head_len = field_head_buffer.length;
                field_buffer_ret.field_whole_buffer = buf;
                iso8583_msg.iso8583_msg_req_encoded[i] = field_buffer_ret;
                loglib.print_debug_msg('wrote: ', field_buffer_ret);
                break;
        }
    }
    // console.log("length: ",iso8583_msg.iso8583_msg_req_encoded.length, " value: ",iso8583_msg.iso8583_msg_req_encoded);
}

function cal_and_add_header(iso8583_msg) {
    loglib.print_debug_msg('entered cal_and_add_header')
    var msglen = 0;
    var headlen = configlib.read_config("cli_hdr_len");
    var headenc = configlib.read_config("cli_enc_hdr");
    var headinc = configlib.read_config("cli_hdr_encl");
    var headincmsg = configlib.read_config("cli_hdr_msg");
    iso8583_msg.iso8583_msg_req_final.header_len = headlen;
    iso8583_msg.iso8583_msg_req_final.include_header = headinc;
    iso8583_msg.iso8583_msg_req_final.header_enc = headenc;
    var totallen = 0;
    var msg_buffer_list = []
    loglib.print_debug_msg('calculating msg length')
    for (var i = 0; i < iso8583_msg.field_no_present.length; i++) {
        msglen = msglen + iso8583_msg.iso8583_msg_req_encoded[i].field_whole_buffer.length;
        msg_buffer_list[i] = iso8583_msg.iso8583_msg_req_encoded[i].field_whole_buffer;
    }
    loglib.print_debug_msg('msglen is ' + msglen)
    loglib.print_debug_msg('calculating header value');
    loglib.print_debug_msg('include msg length for header value calculation: ' +headincmsg )
    if (headinc) {
        if ( headincmsg ) {
            totallen = headlen + msglen;
        } else {
            totallen = msglen;
        }
        loglib.print_debug_msg('msg length: ' + msglen + ' header length: ' + headlen + ' header value: ' + totallen)
        var totallen_str = totallen.toString()
        var msg_buffer = Buffer.concat(msg_buffer_list, msglen);
        var headBuffer = Buffer.alloc(headlen);
        iso8583_msg.iso8583_msg_req_final.header_buf = headBuffer;
        totallen = convlib.decitohex(totallen);
        headenc=="hex"?totallen=pad(totallen,headlen*2,'l','0'):totallen=pad(totallen,headlen,'l','0')
        loglib.print_debug_msg("header value in hex: " +totallen+" encoding: "+headenc);
        headBuffer.write(totallen, 0, headlen, headenc);
        loglib.print_debug_msg("wrote header buffer: ", headBuffer)
        iso8583_msg.iso8583_msg_req_final.final_buffer = Buffer.concat([headBuffer, msg_buffer], headlen + msglen);
    } else {
        iso8583_msg.iso8583_msg_req_final.final_buffer = Buffer.concat(msg_buffer_list, msglen)
        totallen = 0;
        loglib.print_debug_msg('msg length: ' + msglen + ' header length: ' + headlen + ' header value: ' + totallen)
    }
    iso8583_msg.iso8583_msg_req_final.header_value = totallen;
    loglib.print_debug_msg('exiting from cal_and_add_header')
}
