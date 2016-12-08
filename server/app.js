var net = require('net');
var prop = require('./prop')

var HOST = prop.host;
var PORT = prop.port;
net.createServer(function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sock.on('data', function(data) {
        var buffer_data = Buffer.from(data);
        console.log("BYTE RECEVIED: %d", buffer_data.length);
        console.log(buffer_data.toString());
        sock.write(data);
    });
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });

}).listen(PORT, HOST);
console.log('Server listening on ' + HOST + ':' + PORT);
