var convlib = require('./convert');
var prop = require('../prop')

var enclib = {
    encode: encode,
    encode_llvarfield: encode_llvarfield,
    encode_field: encode_field
}
module.exports = enclib;

function encode_field(field_val, enc_format, field_lentype, field_len_max, field_head_enc_format) {
    var field_buffer_ret = null;
    var field_val_str = field_val.toString();
    if (enc_format == 'hex' && field_lentype != 'CONTVAR') {
        field_val_str = convlib.decitohex(field_val)
    }
    if (field_lentype != 'CONTVAR'){
      field_val_str = convlib.bitohex(field_val)
    }
    switch (field_lentype) {
        case "FIXED":
            return field_buffer_ret = Buffer.alloc(field_len_max, field_val_str, enc_format)
            break;
        case "LLVAR":
            var fieldBuffer = Buffer.from(field_val_str, enc_format)
            var field_head_val = fieldBuffer.length;
            var field_head_buffer = Buffer.from(field_head_val, field_head_enc_format)
            return field_buffer_ret = Buffer.concat([field_head_buffer, fieldBuffer], field_head_buffer.length, fieldBuffer.length)
            break;
        case "LLLVAR":
            var fieldBuffer = Buffer.from(field_val_str, enc_format)
            var field_head_val = fieldBuffer.length;
            var field_head_buffer = Buffer.from(field_head_val, field_head_enc_format)
            return field_buffer_ret = Buffer.concat([field_head_buffer, fieldBuffer], field_head_buffer.length, fieldBuffer.length)
            break;
        default:
    }
}

function encode(data, encode_frmt, field_lentype) {
    return Buffer.from(data, encode_frmt)
}

function encode_llvarfield(data, field_type, field_lentype, field_encode_format, fieldlen_encode_format) {
    var datavalstr = data.toString()
    var datalen = data.toString().length;
    var headlen = 0;
    if (field_lentype == "LLVAR") {
        headlen = 2;
    } else if (field_lentype == "LLLVAR") {
        headlen = 3;
    }
    var headvalue = datavalstr.substr(0, headlen);
    var headvaluehex = convlib.decitohex(headvalue)
    var headBuffer = Buffer.alloc(headlen, headvaluehex, fieldlen_encode_format)
    var fieldBuffer = Buffer.alloc(parseInt(headvalue), datavalstr, field_encode_format)
    return Buffer.concat([headBuffer, fieldBuffer], headBuffer.length + fieldBuffer.length);
}
