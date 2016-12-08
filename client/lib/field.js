var prop = require('../prop');
var fconfig = require('../data/field_config');
var field_def = ""


if( prop.iso_version == "1987"){
  field_def = fconfig.iso8583_1987_fields;
}else if (prop.iso_version == "1993"){
  field_def = fconfig.iso8583_1993_fields;
}else {
  throw new Erro("invalid iso8583 version");
}


var fldlib = {
  get_fld_type: get_fld_type,
  get_fld_len_type: get_fld_len_type,
  get_fld_len_max: get_fld_len_max,
  get_fld_desc: get_fld_desc,
  get_fld_is_num_type: get_fld_is_num_type,
  set_fld_padchar: set_fld_padchar,
  get_fld_def: get_fld_def,
  get_fld_data: get_fld_data,
  get_encode_format: get_encode_format
}

module.exports = fldlib;
var loglib = require('./loglib')

function get_fld_type(fno){
  var key = 'f'+fno;
  if ( field_def.hasOwnProperty(key) ){
    return field_def[key].type
  }else {
    loglib.print_err_msg('Field No: '+ fno + ' is not defined in spec file')
  }
}

function get_fld_len_max(fno){
  var key = 'f'+fno;
  if ( field_def.hasOwnProperty(key) ){
    return field_def[key].maxlen
  }else {
    loglib.print_err_msg('Field No: '+ fno + ' is not defined in spec file')
  }
}

function get_fld_len_type(fno){
  var key = 'f'+fno;
  if ( field_def.hasOwnProperty(key) ){
    return field_def[key].lentype
  }else {
    loglib.print_err_msg('Field No: '+ fno + ' is not defined in spec file')
  }
}

function get_fld_desc(fno){
  var key = 'f'+fno;
  if ( field_def.hasOwnProperty(key) ){
    return field_def[key].desc
  }else {
    loglib.print_err_msg('Field No: '+ fno + ' is not defined in spec file')
  }
}

function get_fld_is_num_type(fno){
  if( get_fld_type(fno) =='N' || get_fld_type(fno) =='XN'){
    return true
  }else {
    return false;
  }
}


function set_fld_padchar(data, char, no_char, isatright){
  if(no_char == 0){
    return data
  }
  var result = ""
  for( var i=0; i<no_char; i++ ){
    result = result+char
  }
  if(isatright){
    result = data.toString().concat(result)
  }else {
    result = result.concat(data.toString());
  }
  return result;
}


function get_fld_def(){
  return field_def;
}


function get_fld_data(){
  return require("../data/data");
}


function get_encode_format(fn){
  if(fn==-1){
    return prop.encode.header_encode;
  }
  if(fn==0){
    return prop.encode.mti_encode;
  }
  if(fn==1){
    return prop.encode.bitmap_encode;
  }
  return prop.encode.field_encode;
}
