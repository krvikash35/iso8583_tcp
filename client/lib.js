var net = require('net');
var prop = require('./prop');
var fconfig = require('./field_config');


var alib = {
    connect_and_send: connect_and_send,
    encode_NONE: encode_NONE,
    encode_HEX: encode_HEX,
    encode_BI: encode_BI,
    encode_HEXASCI: encode_HEXASCI,
    encode_ASCIBI: encode_ASCIBI,
    encode_BITOHEX: encode_BITOHEX,
    validate_and_pad_field: validate_and_pad_field,
    gen_bitmap_and_init: gen_bitmap_and_init,
    pad_field_per_iso8583: pad_field_per_iso8583,
    encode_msg_per_iso8583: encode_msg_per_iso8583
}

module.exports = alib;

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
    console.log("encoding  field: field_no: %s field_value: %s field_encode_format: %s, field_type: %s field_lentype:%s",field_no,field_value,field_encode_format, field_type, field_lentype);
    switch (field_encode_format) {
        case "NONE":
            return encode_NONE(field_value);
            break;
        case "NUMTOHEX":
            return encode_HEX(field_value);
            break;
        case "CHARTOHEXASC":
            return encode_HEXASCI(field_value);
            break;
        case "NUMTOHEXASC":
            return encode_HEXASCI(field_value);
            break;
        case "NUMTOHEXTOHEXASC":
            return encode_HEXASCI(encode_HEX(field_value));
            break;
        case "BITOHEX":
            return encode_BITOHEX(field_value);
            break;
        case "BITOHEXTOHEXASC":
            return encode_HEXASCI(encode_BITOHEX(field_value));
            break;
        default:
    }
}

function pad_field_per_iso8583(iso8583_msg) {
    var field_padded;
    for (var i = 0; i < iso8583_msg.field_no_present.length; i++) {
        field_padded = validate_and_pad_field(iso8583_msg.field_no_present[i], iso8583_msg.iso8583_msg_req_origated[i])
        iso8583_msg.iso8583_msg_req_paded[i] = field_padded;
    }
}

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
    iso8583_msg.iso8583_msg_req_origated[1] = result;
    iso8583_msg.field_no_present[1] = 1;

    return result;
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

function encode_NONE(data) {
    return data;
}

function encode_HEX(data) {
    var result;
    data = parseInt(data);
    result = data.toString(16);
    return result;
}

function encode_BI(data) {
    var result;
    if (typeof data != 'number')
        throw new Error("can not encode \"" + data + "\" to BI");
    result = data.toString(2);
    return result;
}

function encode_HEXASCI(data) {
    var result = "";
    if (typeof data != 'string')
        throw new Error("can not encode \"" + data + "\" to encode_HEXASCI");
    for (var i = 0; i < data.length; i++) {
        var ascicode = data.charCodeAt(i);
        result = result + ascicode.toString(16);
    }
    return result;
}

function encode_ASCIBI(data) {
    var result = "";
    if (typeof data != 'string')
        throw new Error("can not encode \"" + data + "\" to encode_ASCIBI");
    for (var i = 0; i < data.length; i++) {
        var ascicode = data.charCodeAt(i);
        result = result + ascicode.toString(2);
    }
    return result;
}

function encode_BITOHEX(data) {
    var result = "";
    if (typeof data != 'string')
        throw new Error("can not encode \"" + data + "\" to encode_BITOHEX");
    for (var i = 0; i < data.length; i += 4) {
        var fourbits = data.substr(i, 4);
        result = result + parseInt(fourbits, 2).toString(16).toUpperCase();
    }
    return result;
}

function connect_and_send() {
    var HOST = prop.server_host;
    var PORT = prop.server_port;
    var client = new net.Socket();
    client.connect(PORT, HOST, function() {
        console.log('CONNECTED TO: ' + HOST + ':' + PORT);
        client.write('I am Chuck Norris!');

    });
    client.on('data', function(data) {
        console.log('DATA: ' + data);
        client.destroy();
    });

    client.on('close', function() {
        console.log('Connection closed');
    });
}
