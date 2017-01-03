'use strict'
var configlib = require('./config');
var convlib = require('./convert');
var logService = require('../logService');

var unpacklib = {
    decode_response_fields: decode_response_fields
}
module.exports = unpacklib;

function decode_response_fields(iso8583_msg){
  logService.logEvent("unpacklib.res_decode_response_fields...decode response field one by one!")
  return new Promise(function(fulfill, reject){
    let resBuff = iso8583_msg.response.final_buffer;
    parse_header(iso8583_msg);
    parse_mti(iso8583_msg);
    // parse_bitmap(iso8583_msg);
    // parse_fields(iso8583_msg);
    fulfill(iso8583_msg);
  })
}


function parse_header(iso){
  logService.logEvent("unpacklib.res_decode_response_fields...parsing header!");
  let ishdrincl = configlib.read_config("ser_hdr_encl");
  if(!ishdrincl){
    logService.logEvent("unpacklib.res_decode_response_fields...header is not included as per configuration, so no need to parse the header!");
  }else {
    let flen = configlib.read_config("ser_hdr_len") ;
    let fenc = configlib.read_config("ser_enc_hdr") ;
    let fvalue = 0;
    let buff_data = iso.response.final_buffer;
    let ptr = iso.response.pointer;
    logService.logEvent("unpacklib.res_decode_response_fields...header length is "+flen+" and header encoding is "+fenc);
    switch (fenc) {
        case "ascii":
            fvalue = buff_data.toString("ascii", ptr, flen);
            ptr = ptr + flen;
            break;
        case "hex":
            fvalue = buff_data.toString("hex", ptr, flen);
            ptr = ptr + flen;
            break;
        case "chexehex":
            fvalue = buff_data.toString("hex", ptr, flen);
            ptr = ptr + flen;
            fvalue = convlib.hextodeci(fvalue);
            break;
        case "chexeascii":
            fvalue = buff_data.toString("ascii", ptr, flen);
            ptr = ptr + flen;
            fvalue = convlib.hextodeci(fvalue);
            break;
    }
    iso.response.field_no_present.push("header");
    iso.response.string_data.header = fvalue;
    iso.response.pointer = ptr;
    logService.logInfo("unpacklib.res_decode_response_fields...response after decoding header:", iso.response);
  }
}

function parse_mti(iso){
  logService.logEvent("unpacklib.res_decode_response_fields...parsing MTI!");
  let fvalue = 0;
  let buff_data = iso.response.final_buffer;
  let ptr = iso.response.pointer;
}

function parse_bitmap(iso){

}

function parse_fields(iso){

}
