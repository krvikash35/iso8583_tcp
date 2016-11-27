var net = require('net');
var alib = require('./lib');
var fconfig = require('./field_config')
var fvalues = require('./data')
var prop = require('./prop');
var iso8583_field_def = ""
var encoding_frmt = prop.encode;

if( prop.iso_version == '1987'){
  iso8583_field_def = fconfig.iso8583_1987_fields
}else {
  iso8583_field_def = fconfig.iso8583_1993_fields
}

//console.log(fconfig.iso8583_1993_fields[1]);
//alib.connect_and_send();
// console.log( alib.encode_NONE("vikash") );
// console.log( alib.encode_HEX(47603048791) );
// console.log( alib.encode_BI(47603048791) );
// console.log( alib.encode_ASCIHEX("vikash") );
// console.log( alib.encode_ASCIBI("vikash") );
// console.log( alib.encode_BITOHEX("01000111011000000011000001001000011110010001") );
// console.log( alib.validate_and_pad_field( 94, "12345666666" ) );


var iso8583_msg = {
  field_no_present: [],
  iso8583_msg_req_origated: [],
  iso8583_msg_req_paded: [],
  iso8583_msg_req_encoded: []
}

alib.gen_bitmap_and_init(fvalues, iso8583_msg);
console.log("################ START ORIGINAL MESSAGE ##################\n Field_No: %s\n Fields_Value: %s\n ################ END ORIGINAL MESSAGE ###################\n", iso8583_msg.field_no_present, iso8583_msg.iso8583_msg_req_origated);


alib.pad_field_per_iso8583(iso8583_msg);
console.log("################ START PADDED MESSAGE ##################\n Field_No: %s\n Fields_Value: %s\n ################ END PADDED MESSAGE ###################\n", iso8583_msg.field_no_present, iso8583_msg.iso8583_msg_req_paded);


alib.encode_msg_per_iso8583(iso8583_msg, encoding_frmt, iso8583_field_def);
console.log("################ START ENCODED MESSAGE ##################\n Field_No: %s\n Fields_Value: %s\n ################ END ENCODED MESSAGE ###################\n", iso8583_msg.field_no_present, iso8583_msg.iso8583_msg_req_encoded);



// alib.connect_and_send(iso8583_msg);
