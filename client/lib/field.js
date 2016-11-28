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
  get_fld_is_num_type: get_fld_is_num_type,
  set_fld_padchar: set_fld_padchar,
  get_fld_def: get_fld_def,
  get_fld_data: get_fld_data
}

module.exports = fldlib;

function get_fld_type(fno){
  return field_def[fno].split(",")[0].trim()
}

function get_fld_len_max(fno){
  return field_def[fno].split(",")[1].trim()
}

function get_fld_len_type(fno){
  return field_def[fno].split(",")[2].trim()
}

function get_fld_is_num_type(fno){
  if( get_fld_type[fno] =='N' || get_fld_type[fno] =='XN'){
    return true
  }else {
    return false;
  }
}


function set_fld_padchar(data, char, no_char, isatright){
  // console.log(char);
  if(no_char == 0){
    return data
  }
  var result = ""
  var char = char.toString();
  for( var i=0; i<no_char; i++ ){
    // char = char.concat(char)
    // console.log(char);
  }
  if(isatright){
    // result = data.toString().concat(char)
  }else {
    // result = char.concat(data.toString());
  }
  // console.log(char);
  // console.log(result);
  // return result;
}


function get_fld_def(){
  return field_def;
}


function get_fld_data(){
  return require("../data/data");
}
