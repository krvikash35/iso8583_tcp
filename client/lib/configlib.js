var prop = require('../config/prop');
var field_def_list = require('./config/field_def_list')
var loglib = require('./loglib');

var configlib = {
  read_config: read_config,
  write_config: write_config
}
module.exports = configlib;

var config_mapping = {
  'ser_host': 'server.host',
  'ser_port': 'server.port',
  'ser_enc_hd': 'server.encode.header_encode',
  'ser_fld_def': 'server.field_def'
}

function read_config(cmkey){
  loglib.print_debug_msg("read_config[cmkey]: " + cmkey)
  var cmvalue = config_mapping[cmkey];
  loglib.print_debug_msg("read_config[cmvalue]: " + cmvalue)
  var result = prop;
  cmvalue = cmvalue.split('.');
  for( var i=0; i<cmvalue.length; i++ ){
    result = result[cmvalue[i]];
  }
  loglib.print_debug_msg("read_config[result]: " + result)
  return result;
}

function write_config(cmkey, value){
  loglib.print_debug_msg("write_config[cmkey]: " + cmkey + " write_config[value]: " + value)
  if( cmkey == "ser_fld_def" || cmkey == "cli_fld_def" ){
    value = field_def_list[value]
  }
  var cmvalue = config_mapping[cmkey];
  loglib.print_debug_msg("write_config[cmvalue]: " + cmvalue)
  var result = prop;
  cmvalue = cmvalue.split('.');
  for( var i=0; i<cmvalue.length-1; i++ ){
    result = result[cmvalue[i]];
  }
  result[cmvalue[cmvalue.length-1]] = value;
  loglib.print_debug_msg("write_config[result]: " + result[cmvalue[cmvalue.length-1]])
}
