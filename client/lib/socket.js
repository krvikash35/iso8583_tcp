var net = require('net');
var prop = require('../prop');
var unpacklib = require('./unpack');
var loglib = require('./loglib');

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
      var buff_data ={
        data: Buffer.from(data),
        ptr: 0,
        decode: {
          header: {
            value: 0,
            len: 0
          },
         body: {
           bitmap: null,
           fprsnt: [],
           fheadval: [],
           fbodyval: []
         }
        }
      }
      console.log("################ START RESPONSE FROM SERVER ################");
      console.log('Received Total %s Bytes..',buff_data.data.length);
      console.log(buff_data.data);
      unpacklib.parse_header(buff_data);
      unpacklib.parse_mti_bitmap(buff_data);
      unpacklib.parse_field(buff_data);
      loglib.print_decoded_message(buff_data);
      console.log("################ END RESPONSE FROM SERVER ################");

    });
    client.on('close', function() {
        console.log('Connection closed');
    });
}
