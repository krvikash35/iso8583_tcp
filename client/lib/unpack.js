var fconfig = require('../data/field_config')
var prop = require('../prop')
var convlib = require('./convert')


var unpacklib = {
  parse_header: parse_header,
  parse_field: parse_field
}

module.exports = unpacklib;

function parse_header(buff_data){
  var headlen = prop.header_len || 0
  var headvalue = null;
  if( headlen > 0){
      headvalue = buff_data.data.readIntLE(buff_data.ptr, headlen);
      buff_data.ptr = buff_data.ptr + headlen;
    }
    console.log("HEADER VALUE: %s POINTER: %s", headvalue, buff_data.ptr);
    parse_mti_bitmap(buff_data)
}


function parse_field(buff_data, bitmap){
  var field_len = null;
  var field_no = null;
  var field_value = null;
  for(var i=1; i<bitmap.length; i++){
    field_no = i+1
    if( bitmap.toString().charAt(i) == 1 ){
      field_len = get_fiedl_size(field_no);
      field_value = buff_data.data.toString(prop.encode.field_alphanum_encode, buff_data.ptr, buff_data.ptr+field_len);
      buff_data.ptr = buff_data.ptr + field_len;
      console.log("Field%s: %s  POINTER: %s",field_no,field_value,buff_data.ptr);
    }

  }
}


function parse_mti_bitmap(buff_data){
  var bitmap = "", bitmap_pri_bin="",bitmap_sec_bin="",bitmap_hex="",bitmap_sec_hex="";
  var mti_len = get_fiedl_size(0);
  var mti_val = buff_data.data.toString(prop.encode.mti_encode, buff_data.ptr, buff_data.ptr+mti_len)
  buff_data.ptr = buff_data.ptr + mti_len;
  console.log("MTI FIELD0: %s POINTER: %s", mti_val, buff_data.ptr);
  var bitmap_pri_hex = buff_data.data.toString(prop.encode.bitmap_encode, buff_data.ptr, buff_data.ptr+8);
  buff_data.ptr = buff_data.ptr + 8;
  var bitmap_pri_bin = convlib.hextobi(bitmap_pri_hex)
  if (bitmap_pri_bin.startsWith(1)){
    var bitmap_sec_hex = buff_data.data.toString(prop.encode.bitmap_encode, buff_data.ptr, buff_data.ptr+8);
    buff_data.ptr = buff_data.ptr + 8;
    var bitmap_sec_bin = convlib.hextobi(bitmap_sec_hex)
  }
  bitmap = bitmap_pri_bin + bitmap_sec_bin;
  bitmap_hex = bitmap_pri_hex + bitmap_sec_hex;
  console.log("BITMAP FIELD1 BIN: %s POINTER: %s\nBITMAP FIELD1 HEX: %s",bitmap, buff_data.ptr,bitmap_hex);

  parse_field(buff_data, bitmap);
}


function get_fiedl_size(field_no){
  var field_size = null;
  if( prop.iso_version == '1987'){
    field_size = fconfig.iso8583_1987_fields[field_no].split(",")[1].trim();
  }else {
    field_size = fconfig.iso8583_1993_fields[field_no].split(",")[1].trim();;
  }
  return parseInt(field_size);
}
