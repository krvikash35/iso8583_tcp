var net = require('net');
var packlib = require('./lib/pack');
var socklib = require('./lib/socket');


var iso8583_msg = {
  field_no_present: [],
  iso8583_msg_req_origated: [],
  iso8583_msg_req_paded: [],
  iso8583_msg_req_encoded: [],
  iso8583_msg_req_final: null
}

packlib.init_and_gen_bitmap(iso8583_msg);
console.log("################ START ORIGINAL MESSAGE ##################\n Field_No: %s\n Fields_Value: %s\n################ END ORIGINAL MESSAGE ###################\n", iso8583_msg.field_no_present, iso8583_msg.iso8583_msg_req_origated);


packlib.pad_field_per_iso8583(iso8583_msg);
console.log("################ START PADDED MESSAGE ##################\n Field_No: %s\n Fields_Value: %s\n ################ END PADDED MESSAGE ###################\n", iso8583_msg.field_no_present, iso8583_msg.iso8583_msg_req_paded);

//
// packlib.encode_msg_per_iso8583(iso8583_msg, encoding_frmt, iso8583_field_def);
// console.log("################ START ENCODED MESSAGE ##################\n Field_No: %s\n Fields_Value: %s\n ################ END ENCODED MESSAGE ###################\n", iso8583_msg.field_no_present, iso8583_msg.iso8583_msg_req_encoded);
//
// packlib.cal_and_add_header(iso8583_msg);
// console.log("################ START FINAL MESSAGE SENDING ##################\n%s\n################ END FINAL MESSAGE SENDING ##################\n\n\n\n",iso8583_msg.iso8583_msg_req_final);
//
// socklib.connect_and_send(iso8583_msg.iso8583_msg_req_final);
