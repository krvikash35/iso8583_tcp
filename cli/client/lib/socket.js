var net = require('net');
var loglib = require('./loglib');
var configlib = require('./configlib');
var unpacklib = require('./unpack');

var soclib = {
  connect_and_send: connect_and_send
}
module.exports = soclib;

function connect_and_send(data) {
    var HOST = configlib.read_config("ser_host");
    var PORT = configlib.read_config("ser_port");
    loglib.print_debug_msg("HOST: "+HOST+" PORT: "+PORT)
    var client = new net.Socket();
    client.connect(PORT, HOST, function() {
        console.log('\n\nCONNECTED TO: ' + HOST + ':' + PORT);
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

      loglib.print_bin_asci_msg(buff_data.data, "Received")
      unpacklib.parse_header(buff_data);
      unpacklib.parse_mti_bitmap(buff_data);
      unpacklib.parse_field(buff_data);
      loglib.print_decoded_message(buff_data);

    });
    client.on('close', function() {
        console.log('Connection closed');
    });
}
