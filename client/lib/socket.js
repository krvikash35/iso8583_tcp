//
// var prop = require('../prop');
// var unpacklib = require('./unpack');
var net = require('net');
var loglib = require('./loglib');
var configlib = require('./configlib');

var soclib = {
  connect_and_send: connect_and_send
}
module.exports = soclib;

function connect_and_send(data) {
    var HOST = configlib.read_config("ser_host");
    var PORT = configlib.read_config("ser_port");
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

      console.log("Binary Data...");
      var data_bin = ''
      var temp;
      for(var i=0; i<buff_data.data.length; i++){
        temp = buff_data.data.toString('hex', i, i+1)
        data_bin = data_bin + pad(temp, 3, 'r', ' ');
      }
      console.log(data_bin);
      console.log("Ascii Data...");
      var data_ascii = ''
      var temp;
      for(var i=0; i<buff_data.data.length; i++){
        temp = buff_data.data.toString('ascii', i, i+1)
        data_ascii = data_ascii + pad(temp, 3, 'r', ' ');
      }
      console.log(data_ascii);

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
