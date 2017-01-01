'use strict'
var configlib = require('./configlib');
var convlib = require('./convert');
logService = require('../logService');

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
      logService.logEvent("packlib.init_and_gen_bitmap..set user specific profile/properties");
      configlib.update_prop(prop);
      iso8583_msg.request.string_data = configlib.read_config('per_req_data');
      let bitmap_bin = "";
      let bitmap_hex = "";
      let isSecBitPresent = false;
      let reqData = iso8583_msg.request.string_data;
      logService.logEvent("packlib.init_and_gen_bitmap..generating bitmap")
      if(iso8583_msg.request.string_data.f0){
        iso8583_msg.request.field_no_present.push(0);
      }
      for(var i=2; i<=128; i++){ //[-1 header, 0 mti notTechnicallyFieldNo], 1 bitmap(pri and sec), 2..128 dataField,
        if( reqData["f"+i] ){
          if( i >= 65 ){
            isSecBitPresent = true;
          }
          bitmap_bin = bitmap_bin + "1"
          iso8583_msg.request.field_no_present.push(i)
        }else {
          bitmap_bin = bitmap_bin + "0"
        }
      }
      if(isSecBitPresent){
        bitmap_bin = "1"+bitmap_bin;
      }else {
        bitmap_bin = "0"+bitmap_bin
      }
      logService.logEvent("packlib.init_and_gen_bitmap..bitmap generated '"+bitmap_bin+"'");
      bitmap_hex = convlib.bitohex(bitmap_bin);
      iso8583_msg.request.string_data.f1 = bitmap_hex;
      iso8583_msg.request.field_no_present.push(1);
      iso8583_msg.request.field_no_present.sort(numComparator)
      logService.logInfo("packlib.init_and_gen_bitmap.iso8583_msg:", iso8583_msg)
      fulfill(iso8583_msg);
    })
}
