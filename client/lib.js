var net = require('net');
var prop = require('./prop');
var fconfig = require('./field_config');


var alib = {
  connect_and_send: connect_and_send,
  encode_NONE: encode_NONE,
  encode_HEX: encode_HEX,
  encode_BI: encode_BI,
  encode_ASCIHEX: encode_ASCIHEX,
  encode_ASCIBI: encode_ASCIBI,
  encode_BITOHEX: encode_BITOHEX,
  validate_and_pad_field: validate_and_pad_field
}

module.exports = alib;

function validate_and_pad_field(field_no, field_val) {
  var field_def = ""; var field_type=""; var field_maxlen = ""; var field_lentype = "";
  if( prop.iso_version == '1987' ){
    field_def = fconfig.iso8583_1993_fields[field_no]
  }else if ( prop.iso_version == '1993' ) {
    field_def = fconfig.iso8583_1987_fields[field_no]
  }
  field_def = field_def.split(",");
  field_type = field_def[0].trim()
  field_maxlen = field_def[1].trim()
  field_lentype = field_def[2].trim()

  field_val_str = field_val.toString();
  field_curr_len = field_val_str.length;
  if ( field_curr_len > field_maxlen ){
    console.log(" FieldNo: %d with value: %s and current length: %d crossed allowed max length: %d", field_no,field_val,field_curr_len,field_maxlen);
    throw new Error();

  }

}

function encode_NONE(data){
  return data;
}
function encode_HEX(data){
  var result;
  if( typeof data != 'number')
    throw new Error( "can not encode \"" + data + "\" to HEX");
  result = data.toString(16);
  return result;
}
function encode_BI(data){
  var result;
  if( typeof data != 'number')
    throw new Error( "can not encode \"" + data + "\" to BI");
  result = data.toString(2);
  return result;
}
function encode_ASCIHEX(data){
  var result="";
  if( typeof data != 'string')
    throw new Error( "can not encode \"" + data + "\" to encode_ASCIHEX");
  for( var i=0; i<data.length; i++ ){
    var ascicode = data.charCodeAt(i);
    result = result + ascicode.toString(16);
  }
  return result;
}
function encode_ASCIBI(data){
  var result="";
  if( typeof data != 'string')
    throw new Error( "can not encode \"" + data + "\" to encode_ASCIBI");
  for( var i=0; i<data.length; i++ ){
    var ascicode = data.charCodeAt(i);
    result = result + ascicode.toString(2);
  }
  return result;
}
function encode_BITOHEX(data){
  var result="";
  if( typeof data != 'string')
    throw new Error( "can not encode \"" + data + "\" to encode_BITOHEX");
  for( var i=0; i<data.length; i+=4){
    var fourbits = data.substr(i, 4);
    result = result + parseInt( fourbits, 2).toString( 16 ).toUpperCase();
  }
  return result;
}

function connect_and_send(){
  var HOST = prop.server_host;
  var PORT = prop.server_port;
  var client = new net.Socket();
  client.connect(PORT, HOST, function() {
      console.log('CONNECTED TO: ' + HOST + ':' + PORT);
      client.write('I am Chuck Norris!');

  });
  client.on('data', function(data) {
      console.log('DATA: ' + data);
      client.destroy();
  });

  client.on('close', function() {
      console.log('Connection closed');
  });
}
