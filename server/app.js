var net = require('net');
var prop = require('./prop')
require('../client/lib/global')

var HOST = prop.host;
var PORT = prop.port;
net.createServer(function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sock.on('data', function(data) {
<<<<<<< HEAD
        var buffer_data = Buffer.from(data);
        console.log("BYTE RECEVIED: %d", buffer_data.length);
        console.log(buffer_data.toString());
        sock.write(data);
=======
      var buffer_data = Buffer.from(data);
      console.log("BYTE RECEVIED: %d",buffer_data.length);
      console.log("Binary Data...");
      var data_bin = ''
      var temp;
      for(var i=0; i<buffer_data.length; i++){
        temp = buffer_data.toString('hex', i, i+1)
        data_bin = data_bin + pad(temp, 3, 'r', ' ');
      }
      console.log(data_bin);
      console.log("Ascii Data...");
      var data_ascii = ''
      var temp;
      for(var i=0; i<buffer_data.length; i++){
        temp = buffer_data.toString('ascii', i, i+1)
        data_ascii = data_ascii + pad(temp, 3, 'r', ' ');
      }
      console.log(data_ascii);
      sock.write(data);

>>>>>>> master
    });
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });

}).listen(PORT, HOST);
console.log('Server listening on ' + HOST + ':' + PORT);
