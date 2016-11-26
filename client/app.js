var net = require('net');
var alib = require('./lib');
var fconfig = require('./field_config')

//console.log(fconfig.iso8583_1993_fields[1]);
//alib.connect_and_send();
console.log( alib.encode_NONE("vikash") );
