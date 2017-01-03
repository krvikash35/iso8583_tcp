var net = require('net');

var HOST = 'localhost';
var PORT = 6969;
net.createServer(function(sock) {
    var clientClosedConn= false;
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sock.on('data', function(data) {
      var buffer_data = Buffer.from(data);
      console.log("BYTE RECEVIED FROM CLIENT: %d",buffer_data.length);
      setTimeout( function(){
        if(clientClosedConn){
          console.log("CLIENT ALREADY CLOSED CONNECTION...DATA LOST");
        }else{
          sock.write(data);//send data after 5 second
        }
      }, 5000);

    });
    sock.on('close', function(data) {
        clientClosedConn = true;
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });
    sock.on('error', function(data) {
        clientClosedConn = false;
        console.log('ERROR: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });

}).listen(PORT, HOST);
console.log('Server listening on ' + HOST + ':' + PORT);
