var prop = require('../prop');
var convlib = require('./convert')
var fconfig = require('../data/field_config');
var enclib = require('./encode');
var fldlib = require('./field')

var packlib = {
    init_and_gen_bitmap: init_and_gen_bitmap,
    pad_field_per_iso8583: pad_field_per_iso8583,
    encode_msg_per_iso8583: encode_msg_per_iso8583,
    cal_and_add_header: cal_and_add_header
}
module.exports = packlib;


function init_and_gen_bitmap(iso8583_msg) {
    var result = "";
    var field_data = fldlib.get_fld_data()
    var isSecBitPresent = false;
    var index = 2;
    if (prop.iso_version == '1987' || prop.iso_version == '1993') {
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
    return 0;
}

function pad_field_per_iso8583(msg) {
    var field_padded;
    var fldpre = msg.field_no_present

    for (var i = 0; i <fldpre.length; i++) {
      var fn = fldpre[i]
      var fv = msg.iso8583_msg_req_origated[i]
      var fcl = msg.iso8583_msg_req_origated[i].length
      var fml = fldlib.get_fld_len_max(fn);
      var ft =  fldlib.get_fld_type(fn);
      var flt = fldlib.get_fld_len_type(fn);
      console.log("ValidateAndPadd FieldNo: %s FieldValue: %s FieldType: %s FieldMaxLength: %s, FieldLenType: %s",fn,fv,ft,fml,flt);
        if ( fcl > fml ){
          console.log("Field_No: %s with value: %s and current_len: %s crossed max allowed length: %s",fn,fv,fcl,fml);
          process.exit();
        }
        console.log(fml-fcl);
        if( fldlib.get_fld_is_num_type ){
          msg.iso8583_msg_req_paded[i] = fldlib.set_fld_padchar(fv,'0',fml-fcl,false);
        }else {
          msg.iso8583_msg_req_paded[i] = fldlib.set_fld_padchar(fv,' ',fml-fcl,true);
        }

    }
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
              if (field_type = 'N' || field_type == 'XN') {
                  field_encode_format = encoding_frmt.field_num_encode;
              } else {
                  field_encode_format = encoding_frmt.field_alphanum_encode;
              }
              var fieldlen_encode_format = prop.encode.var_len_field_headr_encode;
                console.log("encoding  field: field_no: %s field_value: %s field_encode_format: %s, field_type: %s field_lentype:%s", field_no, field_value, field_encode_format, field_type, field_lentype);
                return enclib.encode_llvarfield(field_value, field_type, field_lentype, field_encode_format, fieldlen_encode_format);
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
        console.log(totallen_hex);
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
