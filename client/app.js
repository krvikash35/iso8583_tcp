require('./lib/global')
var net = require('net');
var packlib = require('./lib/pack');
var socklib = require('./lib/socket');
var loglib = require('./lib/loglib');
var subfldlib = require('./lib/subfld')



var iso8583_msg = {
  field_no_present: [],
  iso8583_msg_req_origated: [],
  iso8583_msg_req_paded: [],
  iso8583_msg_req_encoded: [],
  iso8583_msg_req_final: {
    include_header: null,
    header_value: null,
    header_len: null,
    header_enc: null,
    final_buffer: null
  }
}

packlib.init_and_gen_bitmap(iso8583_msg);
loglib.print_org_msg(iso8583_msg)

packlib.pad_field_per_iso8583(iso8583_msg);
loglib.print_padded_msg(iso8583_msg)

packlib.encode_msg_per_iso8583(iso8583_msg);
loglib.print_encoded_msg(iso8583_msg)

console.log("field present" ,iso8583_msg.field_no_present);
console.log("encoded fields" ,iso8583_msg.iso8583_msg_req_encoded);
subfldlib.addsubfield(iso8583_msg);

packlib.cal_and_add_header(iso8583_msg);
loglib.print_final_msg(iso8583_msg);

//socklib.connect_and_send(iso8583_msg.iso8583_msg_req_final.final_buffer);
