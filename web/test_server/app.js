var net = require('net');

var HOST = 'localhost';
var PORT = 6969;
net.createServer(function(sock) {
    var clientClosedConn= false;
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sock.on('data', function(data) {
      var buffer_data = Buffer.from(data);
      print_bin_asci_msg(buffer_data)
      // console.log("BYTE RECEVIED FROM CLIENT: %d",buffer_data.length);
      setTimeout( function(){
        if(clientClosedConn){
          console.log("CLIENT ALREADY CLOSED CONNECTION...DATA LOST");
        }else{
          sock.write(data);//send data after 5 second
        }
      }, 1000);

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
console.log('\nTEST TCP SERVER LISTENING ON ' + HOST + ':' + PORT);


function print_bin_asci_msg(buf){
  console.log("Total " + buf.length + " Bytes Recived" +"..\nBinary Data...");
  var data_bin = ''
  var temp;
  for(var i=0; i<buf.length; i++){
    temp = buf.toString('hex', i, i+1)
    data_bin = data_bin + pad(temp, 3, 'r', ' ');
  }
  console.log(data_bin);
  console.log("Ascii Data...");
  var data_ascii = ''
  var temp;
  for(var i=0; i<buf.length; i++){
    temp = buf.toString('ascii', i, i+1)
    data_ascii = data_ascii + pad(temp, 3, 'r', ' ');
  }
  console.log(data_ascii);
}

function pad(data, max, rorl, char){
  var datastr = data.toString();
  var datalen = datastr.length;
  if(datalen > max){
    return datastr.substring(0,max);
  }
  if(!char){
    char = ' ';
  }
  if(!rorl){
    rorl = 'r';
  }
  var result = ""
  for( var i=0; i<max-datalen; i++ ){
    result = result+char
  }
  if(rorl == 'r'){
    result = data.toString().concat(result)
  }else {
    result = result.concat(data.toString());
  }
  return result;
}
