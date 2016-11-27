var net = require('net');
var prop = require('./prop')

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
      console.log("readInt8(0): ", buffer_data.readInt8(0));
      console.log("readInt8(1): ", buffer_data.readInt8(1));
      console.log("readInt16BE(0): ", buffer_data.readInt16BE(0));
      console.log("readInt16LE(0): ", buffer_data.readInt16LE(0));
      var concated = ""
      for(var i=0; i<buffer_data.length; i++){
        concated = concated + " : " +buffer_data[i].toString()
      }
      console.log(concated);
      console.log(buffer_data.toString('ascii'));

        sock.write(data);

    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);
