var fconfig = require('../data/field_config')
var prop = require('../prop')
var convlib = require('./convert')
var fldlib = require('./field');
var loglib = require('./loglib')


var unpacklib = {
    parse_header: parse_header,
    parse_mti_bitmap: parse_mti_bitmap,
    parse_field: parse_field
}

module.exports = unpacklib;

function parse_header(buff_data) {
    loglib.print_debug_msg('entereded parse_header')
    var headlen = prop.server.header.header_len || 0
    var headenc = prop.server.encode.header_encode;
    var headvalue = null;
    if (prop.server.header.include_header) {
        loglib.print_debug_msg('header length is ' + headlen + ' Byte and encryption is ' + headenc)
        switch (headenc) {
            case 'hex':
                headvalue = buff_data.data.toString('hex', buff_data.ptr, headlen)
                break;
            case 'ascii':
                headvalue = buff_data.data.toString('ascii', buff_data.ptr, headlen)
                break;
            case 'chexehex':
                headvalue = buff_data.data.toString('hex', buff_data.ptr, headlen)
                loglib.print_debug_msg('headvalue from hexstring in hex encoding  is ' + headvalue)
                headvalue = convlib.hextodeci(headvalue)
                loglib.print_debug_msg('headvalue in decimal after conversion is ' + headvalue)
                break;
            case 'chexeascii':
                headvalue = buff_data.data.toString('ascii', buff_data.ptr, headlen)
                loglib.print_debug_msg('headvalue from hexstring in ascii encoding  is ' + headvalue)
                headvalue = convlib.hextodeci(headvalue)
                loglib.print_debug_msg('headvalue in decimal after conversion is ' + headvalue)
                break;
            default:
                loglib.print_err_msg('invalid header encoding: ' + headenc);
                break;
        }
        buff_data.ptr = buff_data.ptr + parseInt(headlen);
        buff_data.decode.header.len = headlen;
        buff_data.decode.header.value = headvalue;
        loglib.print_debug_msg("exiting from parse_header with HEADER VALUE: " + headvalue + " POINTER: " + buff_data.ptr);
    } else {
        loglib.print_debug_msg('no need to parse header as header is not present ')
    }
}

function parse_mti_bitmap(buff_data) {
    loglib.print_debug_msg('entered parse_mti_bitmap');
    var mti_enc = prop.server.encode.mti_encode;
    var mti_len = fldlib.get_fld_len_max(0);
    var mti_val = null;
    loglib.print_debug_msg('parsing mti, encoding is ' + mti_enc + ' and length is ' + mti_len + ' Byte');
    switch (mti_enc) {
        case 'hex':
            mti_val = buff_data.data.toString('hex', buff_data.ptr, buff_data.ptr + mti_len);
            loglib.print_debug_msg('mtivalue from decimal in hex encoding  is ' + mti_val)
            break;
        case 'ascii':
            mti_val = buff_data.data.toString('ascii', buff_data.ptr, buff_data.ptr + mti_len);
            loglib.print_debug_msg('mtivalue from decimal in ascii encoding  is ' + mti_val)
            break;
        case 'chexehex':
            mti_val = buff_data.data.toString('hex', buff_data.ptr, buff_data.ptr + mti_len)
            loglib.print_debug_msg('mtivalue from hexstring in hex encoding  is ' + mti_val)
            mti_val = convlib.hextodeci(headvalue)
            loglib.print_debug_msg('mtivalue in decimal after conversion is ' + mti_val)
            break;
        case 'chexeascii':
            mti_val = buff_data.data.toString('ascii', buff_data.ptr, buff_data.ptr + mti_len)
            loglib.print_debug_msg('mtivalue from hexstring in ascii encoding  is ' + mti_val)
            mti_val = convlib.hextodeci(headvalue)
            loglib.print_debug_msg('mtivalue in decimal after conversion is ' + mti)
            break;
        default:
            loglib.print_err_msg('invalid mti encoding: ' + mti_enc);
            break;
    }
    buff_data.ptr = buff_data.ptr + mti_len;
    buff_data.decode.body.fprsnt.push(0);
    buff_data.decode.body.fheadval.push(0);
    buff_data.decode.body.fbodyval.push(mti_val);
    loglib.print_debug_msg('finished parsing mti VALUE: ' + mti_val + ' POINTER: ' + buff_data.ptr);


    var bitmap_max_len = parseInt(fldlib.get_fld_len_max(1));
    var bitmap_enc = prop.encode.bitmap_encode;
    loglib.print_debug_msg('parsing bitmap: bitmap_max_len: ' + bitmap_max_len + ' bitmap_enc: ' + bitmap_enc);
    var bitmap_pri_hex = buff_data.data.toString(bitmap_enc, buff_data.ptr, buff_data.ptr + bitmap_max_len / 2);
    buff_data.ptr = buff_data.ptr + bitmap_max_len / 2;
    var bitmap_pri_bin = convlib.hextobi(bitmap_pri_hex);
    loglib.print_debug_msg('bitmap_pri_hex: ' + bitmap_pri_hex + ' bitmap_pri_bin: ' + bitmap_pri_bin);
    if (bitmap_pri_bin.startsWith(1)) {
        loglib.print_debug_msg('secondary bitmap present');
        var bitmap_sec_hex = buff_data.data.toString(prop.encode.bitmap_encode, buff_data.ptr, buff_data.ptr + bitmap_max_len / 2);
        loglib.print_debug_msg('bitmap_sec_hex: ' + bitmap_sec_hex );
        buff_data.ptr = buff_data.ptr + bitmap_max_len / 2;
        var bitmap_sec_bin = convlib.hextobi(bitmap_sec_hex);
        loglib.print_debug_msg(' bitmap_sec_bin: ' + bitmap_sec_bin);
    } else {
        loglib.print_debug_msg('secondory bitmap not present');
    }
    var bitmap_bin = bitmap_pri_bin + bitmap_sec_bin;
    var bitmap_hex = bitmap_pri_hex + bitmap_sec_hex;
    loglib.print_debug_msg('complete bitmap in hex: ' + bitmap_hex + ' in bin: ' + bitmap_bin);
    buff_data.decode.body.bitmap = bitmap_bin;
    buff_data.decode.body.fprsnt.push(1);
    buff_data.decode.body.fheadval.push(0);
    buff_data.decode.body.fbodyval.push(bitmap_hex);
    loglib.print_debug_msg('finished parsing bitmap VALUE: ' + bitmap_hex + ' POINTER: ' + buff_data.ptr);
}

function parse_field(buff_data) {
  loglib.print_debug_msg('entered parse_field');
    var bitmap = buff_data.decode.body.bitmap;
    var field_len = null;
    var fn = null;
    var field_value = null;
    var flt = null;
    for (var i = 1; i < bitmap.length; i++) {
        fn = i + 1
        if (bitmap.toString().charAt(i) == 1) {
            buff_data.decode.body.fprsnt.push(fn);
            field_len = parseInt(fldlib.get_fld_len_max(fn));
            flt = fldlib.get_fld_len_type(fn);
            fenc = fldlib.get_encode_format(fn);
            loglib.print_debug_msg('parsing field no: '+fn+' field_len_type: '+flt+' maxlen: '+field_len+' encoding: '+fenc)
            switch (flt) {
                case 'FIXED':
                    field_value = buff_data.data.toString(fenc, buff_data.ptr, buff_data.ptr + field_len);
                    buff_data.ptr = buff_data.ptr + field_len;
                    buff_data.decode.body.fheadval.push(0);
                    buff_data.decode.body.fbodyval.push(field_value);
                    loglib.print_debug_msg("Field"+fn+": "+field_value+"   POINTER: "+buff_data.ptr);
                    break;
                case 'LLVAR':
                    field_value = buff_data.data.toString(fenc, buff_data.ptr, buff_data.ptr + 2);
                    buff_data.ptr = buff_data.ptr + 2;
                    var fhval = parseInt(field_value);
                    field_value = buff_data.data.toString(fenc, buff_data.ptr, buff_data.ptr + fhval);
                    buff_data.ptr = buff_data.ptr + fhval;
                    buff_data.decode.body.fheadval.push(fhval);
                    buff_data.decode.body.fbodyval.push(field_value);
                    loglib.print_debug_msg("Field"+fn+": "+field_value+" field_header: "+fhval+"   POINTER: "+buff_data.ptr);
                    break;
                case 'LLLVAR':
                field_value = buff_data.data.toString(fenc, buff_data.ptr, buff_data.ptr + 3);
                buff_data.ptr = buff_data.ptr + 3;
                var fhval = parseInt(field_value);
                field_value = buff_data.data.toString(fenc, buff_data.ptr, buff_data.ptr + fhval);
                buff_data.ptr = buff_data.ptr + fhval;
                buff_data.decode.body.fheadval.push(fhval);
                buff_data.decode.body.fbodyval.push(field_value);
                loglib.print_debug_msg("Field"+fn+": "+field_value+" field_header: "+fhval+"   POINTER: "+buff_data.ptr);
                    break;
                default:

            }

        }

    }
}
