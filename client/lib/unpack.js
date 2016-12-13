var convlib = require('./convert')
var loglib = require('./loglib');
var configlib = require('./configlib');


var unpacklib = {
    parse_header: parse_header,
    parse_mti_bitmap: parse_mti_bitmap,
    parse_field: parse_field
}

module.exports = unpacklib;

function parse_header(buff_data) {
    loglib.print_debug_msg('entereded parse_header')
    var headlen = configlib.read_config("ser_hdr_len") || 0;
    var headenc = configlib.read_config("ser_enc_hdr");
    var headinc = configlib.read_config("ser_hdr_encl");
    var headvalue = null;
    if (headinc) {
        loglib.print_debug_msg('header length is ' + headlen + ' Byte and encoding is ' + headenc);
        switch (headenc) {
            case "ascii":
                headvalue = buff_data.data.toString("ascii", buff_data.ptr, headlen);
                break;
            case "hex":
                headvalue = buff_data.data.toString("hex", buff_data.ptr, headlen);
                break;
            case "chexehex":
                headvalue = buff_data.data.toString("hex", buff_data.ptr, headlen);
                headvalue = convlib.hextodeci(headvalue);
                break;
            case "chexeascii":
                headvalue = buff_data.data.toString("ascii", buff_data.ptr, headlen);
                headvalue = convlib.hextodeci(headvalue);
                break;
        }
        loglib.print_debug_msg('headvalue is: ' + headvalue)
        headvalue = convlib.hextodeci(headvalue)
        loglib.print_debug_msg('headvalue in decimal after conversion is ' + headvalue);
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
    var mti_enc = configlib.read_config("ser_enc_mti");
    var mti_len = configlib.read_config("ser_fldn_max", 0);
    var mti_val = null;
    loglib.print_debug_msg('parsing mti, encoding is ' + mti_enc + ' and length is ' + mti_len + ' Byte');
    mti_val = buff_data.data.toString(mti_enc, buff_data.ptr, buff_data.ptr + mti_len);
    loglib.print_debug_msg('mtivalue: ' + mti_val)
    buff_data.ptr = buff_data.ptr + mti_len;
    buff_data.decode.body.fprsnt.push(0);
    buff_data.decode.body.fheadval.push(0);
    buff_data.decode.body.fbodyval.push(mti_val);
    loglib.print_debug_msg('finished parsing mti VALUE: ' + mti_val + ' POINTER: ' + buff_data.ptr);


    // var bitmap_max_len = parseInt(fldlib.get_fld_len_max(1));
    var bitmap_enc = configlib.read_config("ser_enc_bit");
    var bitmap_max_len = bitmap_enc == "hex" ? bitmap_max_len = 16 : bitmap_max_len = 32
    loglib.print_debug_msg('parsing bitmap: bitmap_max_len: ' + bitmap_max_len + ' bitmap_enc: ' + bitmap_enc);
    var bitmap_pri_hex = buff_data.data.toString(bitmap_enc, buff_data.ptr, buff_data.ptr + bitmap_max_len / 2);
    buff_data.ptr = buff_data.ptr + bitmap_max_len / 2;
    var bitmap_pri_bin = convlib.hextobi(bitmap_pri_hex);
    loglib.print_debug_msg('bitmap_pri_hex: ' + bitmap_pri_hex + ' bitmap_pri_bin: ' + bitmap_pri_bin);
    if (bitmap_pri_bin.startsWith(1)) {
        loglib.print_debug_msg('secondary bitmap present');
        var bitmap_sec_hex = buff_data.data.toString(bitmap_enc, buff_data.ptr, buff_data.ptr + bitmap_max_len / 2);
        loglib.print_debug_msg('bitmap_sec_hex: ' + bitmap_sec_hex);
        buff_data.ptr = buff_data.ptr + bitmap_max_len / 2;
        var bitmap_sec_bin = convlib.hextobi(bitmap_sec_hex);
        loglib.print_debug_msg(' bitmap_sec_bin: ' + bitmap_sec_bin);
    } else {
        loglib.print_debug_msg('secondory bitmap not present');
        bitmap_sec_bin = ""
        bitmap_sec_hex = ""
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
            field_len = configlib.read_config("ser_fldn_max", fn);
            flt = configlib.read_config("ser_fldn_ltype", fn);
            fenc = configlib.read_config("ser_enc_fld", fn);
            loglib.print_debug_msg('parsing field no: ' + fn + ' field_len_type: ' + flt + ' maxlen: ' + field_len + ' encoding: ' + fenc)
            switch (flt) {
                case 'FIXED':
                    field_value = buff_data.data.toString(fenc, buff_data.ptr, buff_data.ptr + field_len);
                    buff_data.ptr = buff_data.ptr + field_len;
                    buff_data.decode.body.fheadval.push(0);
                    buff_data.decode.body.fbodyval.push(field_value);
                    loglib.print_debug_msg("Field" + fn + ": " + field_value + "   POINTER: " + buff_data.ptr);
                    break;
                default:
                    var varlen = flt.indexOf('V')
                    field_value = buff_data.data.toString(fenc, buff_data.ptr, buff_data.ptr + varlen);
                    buff_data.ptr = buff_data.ptr + varlen;
                    var fhval = parseInt(field_value);
                    field_value = buff_data.data.toString(fenc, buff_data.ptr, buff_data.ptr + fhval);
                    buff_data.ptr = buff_data.ptr + fhval;
                    buff_data.decode.body.fheadval.push(fhval);
                    buff_data.decode.body.fbodyval.push(field_value);
                    loglib.print_debug_msg("Field" + fn + ": " + field_value + " field_header: " + fhval + "   POINTER: " + buff_data.ptr);
                    break;
            }
        }
    }
}
