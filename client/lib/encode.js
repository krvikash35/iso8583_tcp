var convlib = require('./convert');
var prop = require('../prop')
var loglib = require('./loglib')

var enclib = {
    encode: encode,
    encode_llvarfield: encode_llvarfield,
    encode_field: encode_field,
    getFieldDetForEncoding: getFieldDetForEncoding
}
module.exports = enclib;

function getFieldDetForEncoding(fv, fenc, bytelen) {
    loglib.print_debug_msg('entered getFieldDetForEncoding field_value: ' + fv + ' field_enc: ' + fenc + ' Bytelength: ' + bytelen)
    var fdet = {
        fv: null,
        fenc: null
    }
    if (fenc == 'hex') {
        if (iszerolen(fv)) {
            loglib.print_err_msg('given value can not be encoded in hex as it is of zero length(emptyString)')
        }
        if (!isnum(bytelen)) {
            loglib.print_err_msg("given byte lenght " + bytelen + " is not number");
        }
        var bl = parseInt(bytelen);
        var fvl = fv.toString().length;
        if (fvl > bl * 2) {
            loglib.print_err_msg('given value: ' + fv + 'is not possible to write in ' + bl + ' byte with encoding ' + fenc);
        }
        fdet.fv = pad(fv, bl * 2, 'l', '0');
        fdet.fenc = 'hex';
        loglib.print_debug_msg('exiting getFieldDetForEncoding with below fdet: ', fdet);
        return fdet;
    }
    if (fenc == 'ascii') {
        if (iszerolen(fv)) {
            loglib.print_err_msg('given value can not be encoded in ascii as it is of zero length(emptyString)')
        }
        if (!isnum(bytelen)) {
            loglib.print_err_msg("given byte lenght " + bytelen + " is not number");
        }
        var bl = parseInt(bytelen);
        var fvl = fv.toString().length;
        if (fvl > bl) {
            loglib.print_err_msg('given value: ' + fv + 'is not possible to write in ' + bl + ' byte with encoding ' + fenc);
        }
        if (isnum(fv)) {
            fv = pad(fv, bl, 'l', '0');
        } else {
            fv = pad(fv, bl, 'r', ' ')
        }
        fdet.fv = fv;
        fdet.fenc = 'ascii';
        loglib.print_debug_msg('exiting getFieldDetForEncoding with below fdet: ', fdet);
        return fdet;
    }
    if (fenc == 'chexehex') {
        if (iszerolen(fv)) {
            loglib.print_err_msg('given value can not be encoded in hex as it is of zero length(emptyString)')
        }
        if (!isnum(bytelen)) {
            loglib.print_err_msg("given byte lenght " + bytelen + " is not number");
        }

        if (!isnum(fv)) {
            loglib.print_err_msg('given value ' + fv + ' can not be converted to hex')
        }
        var bl = parseInt(bytelen);
        var fvn = parseInt(fv)
        var fvhex = convlib.decitohex(fvn)
        var fvhexl = fvhex.toString().length;
        if (fvhexl > bl * 2) {
            console.log("given value " + fv + " after decitohex conversion " + fvhex + " is not possible to write in " + bl + " byte with encoding:" + fenc);
        }
        fdet.fv = pad(fvhex, bl * 2, 'l', '0');
        fdet.fenc = 'hex';
        loglib.print_debug_msg('exiting getFieldDetForEncoding with below fdet: ', fdet);
        return fdet;
    }
    if (fenc == 'chexeascii') {
        if (iszerolen(fv)) {
            loglib.print_err_msg('given value can not be encoded in hex as it is of zero length(emptyString)')
        }
        if (!isnum(bytelen)) {
            loglib.print_err_msg("given byte lenght " + bytelen + " is not number");
        }

        if (!isnum(fv)) {
            loglib.print_err_msg('given value ' + fv + ' can not be converted to hex')
        }
        var bl = parseInt(bytelen);
        var fvn = parseInt(fv)
        var fvhex = convlib.decitohex(fvn)
        var fvhexl = fvhex.toString().length;
        if (fvhexl > bl) {
            console.log("given value " + fv + " after decitohex conversion " + fvhex + " is not possible to write in " + bl + " byte with encoding:" + fenc);
        }
        fdet.fv = pad(fvhex, bl, 'l', '0');
        fdet.fenc = 'ascii';
        loglib.print_debug_msg('exiting getFieldDetForEncoding with below fdet: ', fdet);
        return fdet;
    }
}

function encode_field(field_val, enc_format, field_lentype, field_len_max) {
    var field_buffer_ret = {
      field_head_buffer: 0,
      field_head_len: 0,
      field_body_buffer: null,
      field_body_len: null,
      field_whole_buffer: null,
      field_enc: null
    };
    switch (field_lentype) {
        case "FIXED":
            var fdet = getFieldDetForEncoding(field_val, enc_format, field_len_max)
            var buf = Buffer.from(fdet.fv, fdet.fenc);
            field_buffer_ret.field_body_buffer = buf;
            field_buffer_ret.field_body_len = buf.length;
            field_buffer_ret.field_whole_buffer = buf;
            field_buffer_ret.field_enc = fdet.fenc;
            field_buffer_ret.field_value = fdet.fv;
            loglib.print_debug_msg('wrote: ', field_buffer_ret);
            break;
        case "CONTVAR":
            var fdet = getFieldDetForEncoding(field_val, enc_format, field_len_max, field_len_max)
            buf = Buffer.from(field_val, enc_format);
            field_buffer_ret.field_body_buffer = buf;
            field_buffer_ret.field_body_len = buf.length;
            field_buffer_ret.field_whole_buffer = buf;
            field_buffer_ret.field_enc = fdet.fenc;
            field_buffer_ret.field_value = fdet.fv;
            loglib.print_debug_msg('wrote: ', field_buffer_ret);
            break;
        case "LLVAR":
            var fdet = getFieldDetForEncoding(field_val, enc_format, field_val.toString().length)
            var fieldBuffer = Buffer.from(fdet.fv, fdet.fenc)
            field_buffer_ret.field_body_buffer = fieldBuffer;
            field_buffer_ret.field_body_len = fieldBuffer.length;
            field_buffer_ret.field_enc = fdet.fenc;
            field_buffer_ret.field_value = fdet.fv;
            var field_head_val_str = fieldBuffer.length.toString();
            var field_head_val_num = fieldBuffer.length;
            if (field_head_val_num < 1 || field_head_val_num > 99) {
                loglib.print_err_msg('LLVAR header should be between 0 and 99 but currently is ' + field_head_val_num)
            }
            fdet = getFieldDetForEncoding(field_head_val_str, enc_format, 2)
            var field_head_buffer = Buffer.from(fdet.fv, fdet.fenc)
            var buf = Buffer.concat([field_head_buffer, fieldBuffer], field_head_buffer.length + fieldBuffer.length);
            field_buffer_ret.field_head_buffer = field_head_buffer;
            field_buffer_ret.field_head_len = field_head_buffer.length;
            field_buffer_ret.field_whole_buffer = buf;
            loglib.print_debug_msg('wrote: ', field_buffer_ret);
            break;
        case "LLLVAR":
        var fdet = getFieldDetForEncoding(field_val, enc_format, field_val.toString().length)
        var fieldBuffer = Buffer.from(fdet.fv, fdet.fenc)
        field_buffer_ret.field_enc = fdet.fenc;
        field_buffer_ret.field_value = fdet.fv;
        field_buffer_ret.field_body_buffer = fieldBuffer;
        field_buffer_ret.field_body_len = fieldBuffer.length;
        var field_head_val_str = fieldBuffer.length.toString();
        var field_head_val_num = fieldBuffer.length;
        if (field_head_val_num < 1 || field_head_val_num > 999) {
            loglib.print_err_msg('LLLVAR header should be between 0 and 999 but currently is ' + field_head_val_num)
        }
        fdet = getFieldDetForEncoding(field_head_val_str, enc_format, 3)
        var field_head_buffer = Buffer.from(fdet.fv, fdet.fenc)
        var buf = Buffer.concat([field_head_buffer, fieldBuffer], field_head_buffer.length + fieldBuffer.length);
        field_buffer_ret.field_head_buffer = field_head_buffer;
        field_buffer_ret.field_head_len = field_head_buffer.length;
        field_buffer_ret.field_whole_buffer = buf;
        loglib.print_debug_msg('wrote: ', field_buffer_ret);
        break;        default:
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
