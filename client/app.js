var net = require('net');
var packlib = require('./lib/pack');
var socklib = require('./lib/socket')
var fconfig = require('./data/field_config')
var fvalues = require('./data/data')
var prop = require('./prop');
var iso8583_field_def = ""
var encoding_frmt = prop.encode;

if( prop.iso_version == '1987'){
  iso8583_field_def = fconfig.iso8583_1987_fields
}else {
  iso8583_field_def = fconfig.iso8583_1993_fields
}

var iso8583_msg = {
  field_no_present: [],
  iso8583_msg_req_origated: [],
  iso8583_msg_req_paded: [],
  iso8583_msg_req_encoded: [],
  iso8583_msg_req_final: null
}

packlib.gen_bitmap_and_init(fvalues, iso8583_msg);
console.log("################ START ORIGINAL MESSAGE ##################\n Field_No: %s\n Fields_Value: %s\n ################ END ORIGINAL MESSAGE ###################\n", iso8583_msg.field_no_present, iso8583_msg.iso8583_msg_req_origated);


packlib.pad_field_per_iso8583(iso8583_msg);
console.log("################ START PADDED MESSAGE ##################\n Field_No: %s\n Fields_Value: %s\n ################ END PADDED MESSAGE ###################\n", iso8583_msg.field_no_present, iso8583_msg.iso8583_msg_req_paded);


packlib.encode_msg_per_iso8583(iso8583_msg, encoding_frmt, iso8583_field_def);
console.log("################ START ENCODED MESSAGE ##################\n Field_No: %s\n Fields_Value: %s\n ################ END ENCODED MESSAGE ###################\n", iso8583_msg.field_no_present, iso8583_msg.iso8583_msg_req_encoded);

packlib.cal_and_add_header(iso8583_msg);
console.log("################ START FINAL MESSAGE WITH HEADER INCLUDED ##################\n%s",iso8583_msg.iso8583_msg_req_final);

socklib.connect_and_send(iso8583_msg.iso8583_msg_req_final);
