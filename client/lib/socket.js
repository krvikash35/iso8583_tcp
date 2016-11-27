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
        console.log('DATA: ' + data);
        client.destroy();
    });
    client.on('close', function() {
        console.log('Connection closed');
    });
}
