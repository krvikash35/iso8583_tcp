var net = require('net');
var alib = require('./lib');
var fconfig = require('./field_config')

//console.log(fconfig.iso8583_1993_fields[1]);
//alib.connect_and_send();
// console.log( alib.encode_NONE("vikash") );
// console.log( alib.encode_HEX(47603048791) );
// console.log( alib.encode_BI(47603048791) );
// console.log( alib.encode_ASCIHEX("vikash") );
// console.log( alib.encode_ASCIBI("vikash") );
// console.log( alib.encode_BITOHEX("01000111011000000011000001001000011110010001") );
console.log( alib.validate_and_pad_field( 3, "1234567" ) );
