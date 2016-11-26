var net = require('net');
var prop = require('./prop');

var alib = {
  connect_and_send: connect_and_send,
  encode_NONE: encode_NONE,
  encode_HEX: encode_HEX,
  encode_BI: encode_BI,
  encode_ASCIHEX: encode_ASCIHEX,
  encode_ASCIBI: encode_ASCIBI
}

module.exports = alib;


function encode_NONE(data){
  return data;
}
function encode_HEX(data){

}
function encode_BI(data){

}
function encode_ASCIHEX(data){

}
function encode_ASCIBI(data){

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
