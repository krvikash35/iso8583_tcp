var prop = require('../prop');
var convlib = require('./convert')
var fconfig = require('../data/field_config');
var enclib = require('./encode');

var packlib = {
    gen_bitmap_and_init: gen_bitmap_and_init,
    pad_field_per_iso8583: pad_field_per_iso8583,
    encode_msg_per_iso8583: encode_msg_per_iso8583,
    cal_and_add_header: cal_and_add_header
}
module.exports = packlib;


function gen_bitmap_and_init(field_data, iso8583_msg) {
    var result = "";
    var isSecBitPresent = false;
    var index = 2;
    if (prop.iso_version == '1987') {
        for (var i = 2; i <= 128; i++) {
            if (field_data["f" + i]) {
                iso8583_msg.iso8583_msg_req_origated[index] = field_data["f" + i];
                iso8583_msg.field_no_present[index] = i;
                index = index + 1;
                if (i >= 65) {
                    isSecBitPresent = true;
                }
                result = result + "1";
            } else {
                result = result + "0";
            }
        }
        if (isSecBitPresent) {
            result = "1" + result;
        } else {
            result = "0" + result.substr(0, 63)
        }
    }
    iso8583_msg.iso8583_msg_req_origated[0] = field_data["f0"];
    iso8583_msg.field_no_present[0] = 0;
    iso8583_msg.iso8583_msg_req_origated[1] = convlib.bitohex(result);
    iso8583_msg.field_no_present[1] = 1;

    return result;
}

function pad_field_per_iso8583(iso8583_msg) {
    var field_padded;
    for (var i = 0; i < iso8583_msg.field_no_present.length; i++) {
        field_padded = validate_and_pad_field(iso8583_msg.field_no_present[i], iso8583_msg.iso8583_msg_req_origated[i])
        iso8583_msg.iso8583_msg_req_paded[i] = field_padded;
    }
}

function validate_and_pad_field(field_no, field_val) {
    var field_def = "";
    var field_type = "";
    var field_maxlen = "";
    var field_lentype = "";
    var result = null;
    if (field_no == 1) {
        return field_val;
    }

    if (prop.iso_version == '1987') {
        field_def = fconfig.iso8583_1993_fields[field_no]
    } else if (prop.iso_version == '1993') {
        field_def = fconfig.iso8583_1987_fields[field_no]
    }
    field_def = field_def.split(",");
    field_type = field_def[0].trim()
    field_maxlen = field_def[1].trim()
    field_lentype = field_def[2].trim()

    field_val_str = field_val.toString();
    field_curr_len = field_val_str.length;
    console.log("validate_and_pad_field: field_no: %s field_val: %s field_type: %s field_curr_len: %s, field_maxlen: %s field_lentype: %s", field_no, field_val, field_type, field_curr_len, field_maxlen, field_lentype);
    if (field_curr_len > field_maxlen) {
        console.log(" FieldNo: %d with value: %s and current length: %d crossed allowed max length: %d  \n%s", field_no, field_val, field_curr_len, field_maxlen, new Error().stack);
        process.exit(1);
    }
    switch (field_lentype) {
        case "FIXED":
            //if field_type numeric padd with zeroes to left, if other than numeric padd with space to right till max allowed length
            if (field_type == 'N' || field_type == 'XN') {
                var paddchar = ""
                for (var i = 0; i < field_maxlen - field_curr_len; i++) {
                    paddchar = paddchar + "0";
                }
                result = paddchar + field_val_str;
            } else {
                var paddchar = ""
                for (var i = 0; i < field_maxlen - field_curr_len; i++) {
                    paddchar = paddchar + " ";
                }
                result = field_val_str + paddchar;
            }
            break;
        case "LLVAR":
            llvar_header = field_val_str.length
            if (llvar_header.toString().length == 1) {
                llvar_header = "0" + llvar_header;
            }
            result = llvar_header + field_val_str;
            break;
        case "LLLVAR":
            llvar_header = field_val_str.length
            if (llvar_header.toString().length == 1)
                llvar_header = "00" + llvar_header;
            if (llvar_header.toString().length == 2)
                llvar_header = "0" + llvar_header;
            result = llvar_header + field_val_str;
            break;
        case "LLLLVAR":
            llvar_header = field_val_str.length
            if (llvar_header.toString().length == 1)
                llvar_header = "000" + llvar_header;
            if (llvar_header.toString().length == 2)
                llvar_header = "00" + llvar_header;
            if (llvar_header.toString().length == 3)
                llvar_header = "0" + llvar_header;
            result = llvar_header + field_val_str;
            break;

        default:


    }
    return result;
}

function encode_msg_per_iso8583(iso8583_msg, encoding_frmt, iso8583_field_def) {
    var field_encoded;
    for (var i = 0; i < iso8583_msg.field_no_present.length; i++) {
        field_encoded = encode_field_per_config(iso8583_msg.field_no_present[i], iso8583_msg.iso8583_msg_req_paded[i], encoding_frmt, iso8583_field_def);
        iso8583_msg.iso8583_msg_req_encoded[i] = field_encoded;
    }
}

function encode_field_per_config(field_no, field_value, encoding_frmt, iso8583_field_def) {
    var result, field_def, field_type, field_lentype;
    var field_encode_format;
    field_def = iso8583_field_def[field_no].split(",");
    field_type = field_def[0].trim();
    field_lentype = field_def[2].trim();
    if (!encoding_frmt.use_defualt_encode) {
        if (field_no == 0) {
            field_encode_format = encoding_frmt.mti_encode;
        } else if (field_no == 1) {
            field_encode_format = encoding_frmt.bitmap_encode;
        } else {

            if (field_lentype == 'FIXED') {
                if (field_type = 'N' || field_type == 'XN') {
                    field_encode_format = encoding_frmt.field_num_encode;
                } else {
                    field_encode_format = encoding_frmt.field_alphanum_encode;
                }
            } else {

            }
        }
    }
    console.log("encoding  field: field_no: %s field_value: %s field_encode_format: %s, field_type: %s field_lentype:%s", field_no, field_value, field_encode_format, field_type, field_lentype);
    return enclib.encode(field_value, field_encode_format)
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
        var msg_buffer = Buffer.concat(iso8583_msg.iso8583_msg_req_encoded, msglen);
        var headBuffer = Buffer.alloc(headlen);
        var totallen_hex = convlib.decitohex(totallen);
        totallen_hex = "0x" + totallen_hex;
        switch (prop.header_len) {
            case 1:
                headBuffer.writeInt8(totallen_hex)
                break;
            case 2:
                headBuffer.writeInt16BE(totallen_hex)
                break;
            case 4:
                headBuffer.writeInt32BE(totallen_hex)
                break;
            default:

        }
        headBuffer.write(totallen_hex, 1, 1, 'hex');
        iso8583_msg.iso8583_msg_req_final = Buffer.concat([headBuffer, msg_buffer], headlen + msglen);
    } else {
        iso8583_msg.iso8583_msg_req_final = Buffer.concat(iso8583_msg.iso8583_msg_req_encoded, msglen)
        totallen = 0;
    }
    console.log("HEADER BYTE LENGTH: %d\nMESSAGE BYTE LENGTH: %d\nVALUE PUT IN HEADER: %d\n", headlen, msglen, totallen);

}
