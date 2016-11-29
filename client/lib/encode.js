var convlib = require('./convert');
var prop = require('../prop')

var enclib = {
    encode: encode,
    encode_llvarfield: encode_llvarfield,
    encode_field: encode_field
}
module.exports = enclib;

function getFieldDetForEncoding(fv, fenc) {
    var fdet = {
        fv: null,
        fenc: null
    }
    if (fenc == 'hex') {
        if (isNaN(fv)) {
            throw new Error('getFieldValueForEncoding: given value: ' + fv + ' is not a number')
        }
        var fvn = parseInt(fv)
        var fvs = fv.toString()
        if ((fvs.length % 2) != 0) {
            fvs = "0" + fvs;
        }
        fdet.fv = fvs;
        fdet.fenc = 'hex';
        return fdet;
    }
    if (fenc == 'ascii') {
        fdet.fv = fv;
        fdet.fenc = 'ascii';
        return fdet;
    }
    if (fenc == 'chexehex') {
        if (isNaN(fv)) {
            throw new Error('getFieldValueForEncoding: given value: ' + fv + ' is not a number')
        }
        var fvn = parseInt(fv)
        var fvs = fv.toString()
        var fvhex = convlib.decitohex(fvn)
        if ((fvhex.toString().length % 2) != 0) {
            fvhex = "0" + fvhex;
        }
        fdet.fv = fvhex;
        fdet.fenc = 'hex';
        return fdet;
    }
    if (fenc == 'chexeascii') {
        if (isNaN(fv)) {
            throw new Error('getFieldValueForEncoding: given value: ' + fv + ' is not a number')
        }
        var fvn = parseInt(fv)
        var fvs = fv.toString()
        var fvhex = convlib.decitohex(fvn)
        if ((fvhex.toString().length % 2) != 0) {
            fvhex = "0" + fvhex;
        }
        fdet.fv = fvhex;
        fdet.fenc = 'ascii';
        return fdet;
    }
}

function encode_field(field_val, enc_format, field_lentype, field_len_max, field_head_enc_format) {
    var field_buffer_ret = null;
    switch (field_lentype) {
        case "FIXED":
            var fdet = getFieldDetForEncoding(field_val, enc_format)
            field_buffer_ret = Buffer.from(fdet.fv, fdet.fenc)
            break;
        case "CONTVAR":
            field_buffer_ret = Buffer.from(field_val, enc_format)
            break;
        case "LLVAR":
            var fdet = getFieldDetForEncoding(field_val, enc_format)
            var fieldBuffer = Buffer.from(fdet.fv, fdet.fenc)
            var field_head_val_str = fieldBuffer.length.toString();
            var field_head_val_num = fieldBuffer.length;
            if (field_head_val_num > 0 && field_head_val_num < 99) {
                if (field_head_val_str.length == 1) {
                    field_head_val_str = "0" + field_head_val_str;
                }
            } else {
                throw new Error('LLVAR header should be between 0 and 99 but currently is ' + field_head_val_num)
            }
            fdet = getFieldDetForEncoding(field_head_val_str, field_head_enc_format)
            var field_head_buffer = Buffer.from(fdet.fv, fdet.fenc)
            field_buffer_ret = Buffer.concat([field_head_buffer, fieldBuffer], field_head_buffer.length + fieldBuffer.length)
            break;
        case "LLLVAR":
            var fdet = getFieldDetForEncoding(field_val, enc_format)
            var fieldBuffer = Buffer.from(fdet.fv, fdet.fenc)
            var field_head_val_str = fieldBuffer.length.toString();
            var field_head_val_num = fieldBuffer.length;
            if (field_head_val_num > 0 && field_head_val_num < 1000) {
                if (field_head_val_str.length == 1) {
                    field_head_val_str = "00" + field_head_val_str;
                }
                if (field_head_val_str.length == 2) {
                    field_head_val_str = "0" + field_head_val_str;
                }
            } else {
                throw new Error('LLLVAR header should be between 0 and 1000 but currently is ' + field_head_val_num)
            }
            fdet = getFieldDetForEncoding(field_head_val_str, field_head_enc_format)
            var field_head_buffer = Buffer.from(fdet.fv, fdet.fenc)
            field_buffer_ret = Buffer.concat([field_head_buffer, fieldBuffer], field_head_buffer.length+fieldBuffer.length)
            break;
        default:
    }
    return field_buffer_ret
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
