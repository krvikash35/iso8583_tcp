var net = require('net');
var prop = require('../prop');

var soclib = {
  connect_and_send: connect_and_send
}
module.exports = soclib;

function connect_and_send(data) {
    var HOST = prop.server_host;
    var PORT = prop.server_port;
    var client = new net.Socket();
    client.connect(PORT, HOST, function() {
        console.log('CONNECTED TO: ' + HOST + ':' + PORT);
        client.write(data);
    });
    client.on('data', function(data) {
      var buffer_data = Buffer.from(data);
      var buff_len = buffer_data.length;
      console.log("################ START SERVER RESPONSE ##################\nBINARY DATA: %s\nRECEIVED BYTES:%d\nSTRING DATA: %s\n################ END SERVER RESPONSE ##################",data,buff_len,buffer_data.toString('ascii'));
        client.destroy();
    });
    client.on('close', function() {
        console.log('Connection closed');
    });
}
