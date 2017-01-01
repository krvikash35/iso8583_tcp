var configlib = require('./configlib');
var convlib = require('./convert');

var iso8583_msg = {
  request: {
    field_no_present: [],
    string_data: {},
    encoded_data: {},
    final_buffer: ''
  },
  response: {

  }
  // field_no_present: [],
  // iso8583_msg_req_origated: [],
  // iso8583_msg_req_encoded: [],
  // iso8583_msg_res_encoded: [],
  // iso8583_msg_req_final: {
  //   include_header: null,
  //   header_value: null,
  //   header_len: null,
  //   header_enc: null,
  //   header_buf: null,
  //   final_buffer: null
  // }
}

var packlib = {
    init_and_gen_bitmap: init_and_gen_bitmap
    // pad_field_per_iso8583: pad_field_per_iso8583,
    // encode_msg_per_iso8583: encode_msg_per_iso8583,
    // cal_and_add_header: cal_and_add_header
}
module.exports = packlib;


function init_and_gen_bitmap(prop) {
    return new Promise(function(fulfill, reject){
      iso8583_msg.request.string_data = configlib.read_config('per_req_data');
      
    })
}
