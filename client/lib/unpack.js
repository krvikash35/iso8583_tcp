var fconfig = require('../data/field_config')
var prop = require('../prop')
var convlib = require('./convert')
var fldlib = require('./field')


var unpacklib = {
    parse_header: parse_header,
    parse_field: parse_field
}

module.exports = unpacklib;

function parse_header(buff_data) {
    var headlen = prop.header_len || 0
    var headvalue = null;
    switch (headlen) {
        case 1:
            headvalue = buff_data.data.readInt8();
            break;
        case 2:
            headvalue = buff_data.data.readInt16BE();
            break;
        case 4:
            headvalue = buff_data.data.readInt32BE();
            break;
        default:
    }
    buff_data.ptr = buff_data.ptr + parseInt(headlen);
    console.log("HEADER VALUE: %s POINTER: %s", headvalue, buff_data.ptr);
    parse_mti_bitmap(buff_data)
}


function parse_field(buff_data, bitmap) {
    var field_len = null;
    var fn = null;
    var field_value = null;
    var ft = null;
    for (var i = 1; i < bitmap.length; i++) {
        fn = i + 1
        if (bitmap.toString().charAt(i) == 1) {
            field_len = get_field_size(fn);
            ft = fldlib.get_fld_len_type(fn)
            switch (ft) {
                case 'FIXED':
                    var fdet = getFieldDetForDecoding(fn)
                    field_value = buff_data.data.toString(fdet.fenc, buff_data.ptr, buff_data.ptr + fdet.flen);
                    buff_data.ptr = buff_data.ptr + fdet.flen;
                    console.log("Field%s: %s   POINTER: %s", fn, field_value, buff_data.ptr);
                    break;
                case 'LLVAR':
                    var fdet = getFieldDetForDecoding(fn, 'h')
                    field_value = buff_data.data.toString(fdet.fenc, buff_data.ptr, buff_data.ptr + fdet.flen);
                    buff_data.ptr = buff_data.ptr + fdet.flen;
                    var fhval = parseInt(field_value)
                    fdet = getFieldDetForDecoding(fn, 'f')
                    fdet.flen = fhval
                    field_value = buff_data.data.toString(fdet.fenc, buff_data.ptr, buff_data.ptr + fdet.flen);
                    buff_data.ptr = buff_data.ptr + fdet.flen;
                    console.log("Field%s(%s): %s   POINTER: %s", fn, fhval,field_value, buff_data.ptr);
                    break;
                case 'LLLVAR':
                    var fdet = getFieldDetForDecoding(fn, 'h')
                    field_value = buff_data.data.toString(fdet.fenc, buff_data.ptr, buff_data.ptr + fdet.flen);
                    buff_data.ptr = buff_data.ptr + fdet.flen;
                    var fhval = parseInt(field_value)
                    fdet = getFieldDetForDecoding(fn, 'f')
                    fdet.flen = fhval
                    field_value = buff_data.data.toString(fdet.fenc, buff_data.ptr, buff_data.ptr + fdet.flen);
                    buff_data.ptr = buff_data.ptr + fdet.flen;
                    console.log("Field%s(%s): %s      POINTER: %s", fn, fhval,field_value, buff_data.ptr);
                    break;
                default:

            }

        }

    }
}

function getFieldDetForDecoding(fn, vardet) {
    var fdet = {
        flen: null,
        fenc: null
    }
    var flen_asc = get_field_size(fn)
    var flen_hex = parseInt(flen_asc) / 2;
    var fenc = fldlib.get_encode_format(fn);
    var fhenc = fldlib.get_encode_format(fn, "llvar");
    var flt = fldlib.get_fld_len_type(fn);
    if (flt == 'FIXED') {
        if (fenc == 'ascii') {
            fdet.flen = parseInt(flen_asc)
            fdet.fenc = 'ascii'
            return fdet;
        }
        if (fenc == 'hex') {
            fdet.flen = parseInt(flen_hex)
            fdet.fenc = 'hex'
            return fdet;
        }
    }


    if (flt == 'LLVAR') {
        if (vardet == 'h') {
            if (fhenc == 'ascii') {
                fdet.flen = 2
                fdet.fenc = 'ascii'
                return fdet;
            }
            if (fhenc == 'hex') {
                fdet.flen = 1
                fdet.fenc = 'hex'
                return fdet;
            }
        } else {
            if (fenc == 'ascii') {
                fdet.flen = null
                fdet.fenc = 'ascii'
                return fdet;
            }
            if (fenc == 'hex') {
                fdet.flen = null
                fdet.fenc = 'hex'
                return fdet;
            }
        }
    }


    if (flt == 'LLLVAR') {
        if (vardet == 'h') {
            if (fhenc == 'ascii') {
                fdet.flen = 3
                fdet.fenc = 'ascii'
                return fdet;
            }
            if (fhenc == 'hex') {
                fdet.flen = 2
                fdet.fenc = 'hex'
                return fdet;
            }
        } else {
            if (fenc == 'ascii') {
                fdet.flen = null
                fdet.fenc = 'ascii'
                return fdet;
            }
            if (fenc == 'hex') {
                fdet.flen = null
                fdet.fenc = 'hex'
                return fdet;
            }
        }

    }
}





function parse_mti_bitmap(buff_data) {
    var bitmap = "",
        bitmap_pri_bin = "",
        bitmap_sec_bin = "",
        bitmap_hex = "",
        bitmap_sec_hex = "";
    var mti_len = get_field_size(0);
    var mti_val = buff_data.data.toString(prop.encode.mti_encode, buff_data.ptr, buff_data.ptr + mti_len)
    buff_data.ptr = buff_data.ptr + mti_len;
    console.log("MTI FIELD0: %s POINTER: %s", mti_val, buff_data.ptr);
    var bitmap_pri_hex = buff_data.data.toString(prop.encode.bitmap_encode, buff_data.ptr, buff_data.ptr + 8);
    buff_data.ptr = buff_data.ptr + 8;
    var bitmap_pri_bin = convlib.hextobi(bitmap_pri_hex)
    if (bitmap_pri_bin.startsWith(1)) {
        var bitmap_sec_hex = buff_data.data.toString(prop.encode.bitmap_encode, buff_data.ptr, buff_data.ptr + 8);
        buff_data.ptr = buff_data.ptr + 8;
        var bitmap_sec_bin = convlib.hextobi(bitmap_sec_hex)
    }
    bitmap = bitmap_pri_bin + bitmap_sec_bin;
    bitmap_hex = bitmap_pri_hex + bitmap_sec_hex;
    console.log("BITMAP FIELD1 BIN: %s POINTER: %s\nBITMAP FIELD1 HEX: %s", bitmap, buff_data.ptr, bitmap_hex);

    parse_field(buff_data, bitmap);
}


function get_field_size(field_no) {
    var field_size = null;
    if (prop.iso_version == '1987') {
        field_size = fconfig.iso8583_1987_fields[field_no].split(",")[1].trim();
    } else {
        field_size = fconfig.iso8583_1993_fields[field_no].split(",")[1].trim();;
    }
    return parseInt(field_size);
}
