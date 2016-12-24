require('./global')
var prop = require('../config/prop');
var field_def_list = require('../config/field_def_list')
var loglib = require('./loglib');


var configlib = {
  read_config: read_config,
  write_config: write_config
}
module.exports = configlib;

var config_mapping = {
  'enable_debug': 'enable_debug',
  'usr_data': 'usr_data',
  'ser_host': 'server.host',
  'ser_port': 'server.port',
  'ser_enc_hdr': 'server.encode.header_encode',
  'ser_enc_mti': 'server.encode.mti_encode',
  'ser_enc_bit': 'server.encode.bitmap_encode',
  'ser_enc_fld': 'server.encode.field_encode',
  'ser_hdr_encl': 'server.header.include_header',
  'ser_hdr_msg': 'server.header.include_header_for_msglen_cal',
  'ser_hdr_len': 'server.header.header_len',
  'ser_fld_def': 'server.field_def',
  'ser_fldn_def': 'server.field_def.FNO',
  'ser_fldn_type': 'server.field_def.FNO.type',
  'ser_fldn_max': 'server.field_def.FNO.maxlen',
  'ser_fldn_ltype': 'server.field_def.FNO.lentype',
  'ser_fldn_des': 'server.field_def.FNO.desc',
  'cli_enc_hdr': 'client.encode.header_encode',
  'cli_enc_mti': 'client.encode.mti_encode',
  'cli_enc_bit': 'client.encode.bitmap_encode',
  'cli_enc_fld': 'client.encode.field_encode',
  'cli_hdr_encl': 'client.header.include_header',
  'cli_hdr_msg': 'client.header.include_header_for_msglen_cal',
  'cli_hdr_len': 'client.header.header_len',
  'cli_fld_def': 'client.field_def',
  'cli_fldn_def': 'client.field_def.FNO',
  'cli_fldn_type': 'client.field_def.FNO.type',
  'cli_fldn_max': 'client.field_def.FNO.maxlen',
  'cli_fldn_ltype': 'client.field_def.FNO.lentype',
  'cli_fldn_des': 'client.field_def.FNO.desc'
}

function read_config(cmkey, fn){
  loglib.print_debug_msg("read_config[cmkey]: " + cmkey)
  if( iszerolen(cmkey) ){
    loglib.print_err_msg("read_config: invalid config mapping key");
  }
  var cmvalue = config_mapping[cmkey];
  if( cmkey.startsWith("cli_fldn") || cmkey.startsWith("ser_fldn") ){
    if ( isnum(fn) ){
      cmvalue = cmvalue.replace('FNO',"f"+fn);
      loglib.print_debug_msg("read_config: fieldNo: "+fn+" cmvalue: "+cmvalue);
    }else {
      loglib.print_err_msg("read_config: field no: '"+fn+"' is invalid");
    }
  }
  loglib.print_debug_msg("read_config[cmvalue]: " + cmvalue)
  var result = prop;
  cmvalue = cmvalue.split('.');
  for( var i=0; i<cmvalue.length; i++ ){
    result = result[cmvalue[i]];
  }
  loglib.print_debug_msg("read_config[result]: " + result)
  return result;
}

function write_config(cmkey, value, fn){
  loglib.print_debug_msg("write_config[cmkey]: " + cmkey + " write_config[value]: " + value)
  if( iszerolen(cmkey) || iszerolen(value) ){
    loglib.print_err_msg("write_config: config mapping key or value is of zero length");
  }
  if( cmkey == "ser_fld_def" || cmkey == "cli_fld_def" ){
    value = field_def_list[value]
  }
  var cmvalue = config_mapping[cmkey];
  if( cmkey.startsWith("cli_fldn") || cmkey.startsWith("ser_fldn") ){
    if ( isnum(fn) ){
      cmvalue = cmvalue.replace('FNO',"f"+fn);
      loglib.print_debug_msg("write_config: fieldNo: "+fn+" cmvalue: "+cmvalue);
    }else {
      loglib.print_err_msg("write_config: field no: '"+fn+"' is invalid");
    }
  }

  loglib.print_debug_msg("write_config[cmvalue]: " + cmvalue)
  var result = prop;
  cmvalue = cmvalue.split('.');
  for( var i=0; i<cmvalue.length-1; i++ ){
    result = result[cmvalue[i]];
  }
  result[cmvalue[cmvalue.length-1]] = value;
  loglib.print_debug_msg("write_config[result]: " + result[cmvalue[cmvalue.length-1]])
}
