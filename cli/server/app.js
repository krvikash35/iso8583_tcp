var net = require('net');
var prop = require('./prop')
require('../client/lib/global')

var HOST = prop.host;
var PORT = prop.port;

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
net.createServer(function(sock) {

    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);

    // Add a 'data' event handler to this instance of socket
    sock.on('data', function(data) {
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

    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);
