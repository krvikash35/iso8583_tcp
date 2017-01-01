var defaultReqData = require('../default/requestData');
var defaultFieldDefList = require('../default/fieldDefList');
var defaultProp = require('../default/prop');

var defaultData = {
  defaultReqData: defaultReqData,
  defaultFieldDefList: defaultFieldDefList,
  defaultProp: defaultProp
}
var configlib = {
  read_config: read_config,
  // write_config: write_config,
  get_default: get_default,
  update_prop: update_prop
}
module.exports = configlib;

var config_mapping = {
  'per_req_data': 'personal.reqData',
  'per_theme_type': 'personal.theme',
  'per_log_level': 'personal.loglevel',
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


function get_default(){
  return new Promise(function(fulfill, reject){
    var value = defaultData;
    if(!value){
      reject( new Error("configlib.defaultData: value for key '"+key+"' not defined") );
    }else{
      fulfill(value);
    }
  })
}

function read_config(cmkey, fn){
    if( iszerolen(cmkey) ){
      throw new Error("configlib.read_config: invalid config mapping key..it must non zero length");
    }
    var cmvalue = config_mapping[cmkey];
    if( !cmvalue ){
      throw new Error("configlib.read_config: invalid config mapping key..no defined config mapping found for key '"+cmkey+"'");
    }
    if( cmkey.startsWith("cli_fldn") || cmkey.startsWith("ser_fldn") ){
      if ( isnum(fn) ){
        cmvalue = cmvalue.replace('FNO',"f"+fn);
        // loglib.print_debug_msg("read_config: fieldNo: "+fn+" cmvalue: "+cmvalue);
      }else {
        throw new Error("configlib.read_config: field no: '"+fn+"' is invalid..it must be number")
        // loglib.print_err_msg("read_config: field no: '"+fn+"' is invalid");
      }
    }
    // loglib.print_debug_msg("read_config[cmvalue]: " + cmvalue)
      var result = defaultProp;
      cmvalue = cmvalue.split('.');
      for( var i=0; i<cmvalue.length; i++ ){
        result = result[cmvalue[i]];
      }
    if(!result){
      throw new Error("could not get defined value for given config key '"+cmkey+"' and correspodning cmvalue '"+cmvalue+"' ..config value is undefined")
    }

    // loglib.print_debug_msg("read_config[result]: " + result)
    return result;
}


// function write_config(){
//   return new Promise(function(fulfill, reject){
//
//   })
// }


function update_prop(prop){
  defaultProp = prop;
}
