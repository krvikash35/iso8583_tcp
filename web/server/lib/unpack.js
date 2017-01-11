'use strict'
var configlib = require('./config');
var convlib = require('./convert');
var logService = require('../logService');
var wslogService = require('../wslogService');

var unpacklib = {
    decode_response_fields: decode_response_fields
}
module.exports = unpacklib;

function decode_response_fields(iso8583_msg){
  let logService = wslogService(iso8583_msg.wsid)
  logService.logEvent("unpacklib.res_decode_response_fields...decode response field one by one!")
  return new Promise(function(fulfill, reject){
    let resBuff = iso8583_msg.response.final_buffer;
    parse_header(iso8583_msg);
    parse_mti(iso8583_msg);
    parse_bitmap(iso8583_msg);
    parse_fields(iso8583_msg);
    fulfill(iso8583_msg.response.string_data);
  })
}


function parse_header(iso){
  let logService = wslogService(iso.wsid)
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
    logService.logEvent("unpacklib.res_decode_response_fields...header length is "+flen+" and header encoding is "+fenc + " and pointer is "+ptr);

    switch (fenc) {
        case "ascii":
            fvalue = buff_data.toString("ascii", ptr, flen);
            ptr = ptr + flen;
            break;
        case "nbo":
            if(flen > 6)
              throw new Error("unpacklib.res_decode_response_fields...parsing header, maximum header length allowed for given header encoding netowrk byte order is 6 but current header length is "+flen)
            fvalue = buff_data.readIntBE(0, flen).toString(10)
            ptr = ptr + flen;
            break;
        case "hbo":
            if(flen > 6)
              throw new Error("unpacklib.res_decode_response_fields...parsing header, maximum header length allowed for given header encoding host byte order is 6 but current header length is "+flen)
            fvalue = buff_data.readIntLE(0, flen).toString(10)
            ptr = ptr + flen;
            break;
        default:
            throw new Error("unpacklib.res_decode_response_fields...given encoding type '"+ fenc+"' for header is not supported!");
    }
    // iso.response.field_no_present.push("header");
    // iso.response.string_data.header = fvalue ;
    iso.response.pointer = ptr;
    logService.logInfo("unpacklib.res_decode_response_fields...header value after decoding header: ", fvalue);
  }
}

function parse_mti(iso){
  let logService = wslogService(iso.wsid)
  logService.logEvent("unpacklib.res_decode_response_fields...parsing MTI!");
  let fvalue = 0;
  let buff_data = iso.response.final_buffer;
  let ptr = iso.response.pointer;
  let flen = configlib.read_config("ser_fldn_max", 0) ;
  let fenc = configlib.read_config("ser_enc_fld") ;
  let flentype = parseInt(configlib.read_config("ser_fldn_ltype", 0));
  logService.logEvent("unpacklib.res_decode_response_fields...parsing MTI, length type is "+flentype + " and max length is "+ flen +" and encoding is "+fenc + " and pointer is "+ptr);
  if( flentype == 0){
    fvalue = buff_data.toString(fenc, ptr, ptr+flen);
    ptr = ptr + flen;
  }else {
    let fheadlen = parseInt (buff_data.toString(fenc, ptr, ptr+flentype) );
    ptr = ptr + flentype;
    fvalue = buff_data.toString(fenc, ptr, ptr+fheadlen);
    ptr = ptr + fheadlen;
  }

  // switch (fenc) {
  //     case "ascii":
  //         fvalue = buff_data.toString("ascii", ptr, ptr+flen);
  //         ptr = ptr + flen;
  //         break;
  //     case "hex":
  //         fvalue = buff_data.toString("hex", ptr, ptr+flen);
  //         ptr = ptr + flen;
  //         break;
  //     default:
  //         throw new Error("unpacklib.res_decode_response_fields...given encoding type '"+ fenc+"' for MTI is not supported!");
  // }
  iso.response.field_no_present.push(0);
  iso.response.string_data.f0 = fvalue;
  iso.response.pointer = ptr;
  logService.logInfo("unpacklib.res_decode_response_fields...response after decoding MTI: ", iso.response.string_data);
}

function parse_bitmap(iso){
  let logService = wslogService(iso.wsid)
  logService.logEvent("unpacklib.res_decode_response_fields...parsing bitmap");
  let fenc = configlib.read_config("ser_enc_bit") ;
  let flen = fenc=="hex"? 8:  16;
  let ptr = iso.response.pointer;
  let buff_data = iso.response.final_buffer;
  logService.logEvent("unpacklib.res_decode_response_fields...bitmap length is "+flen+" and bitmap encoding is "+fenc + " and pointer is "+ptr);
  let bitmap = buff_data.toString(fenc, ptr, ptr+flen);
  ptr = ptr + flen;
  logService.logInfo("unpacklib.res_decode_response_fields...primary bitmap is: \n"+bitmap);

  let bitmap_bin = convlib.hextobi(bitmap);
  if (bitmap_bin.startsWith(1)) {
    logService.logEvent("unpacklib.res_decode_response_fields...secondory bitmap is present!");
    let bitmap_sec = buff_data.toString(fenc, ptr, ptr+flen);
    ptr = ptr + flen;
    logService.logInfo("unpacklib.res_decode_response_fields...secondory bitmap is \n" +bitmap_sec )
    let bitmap_sec_bin = convlib.hextobi(bitmap_sec);
    bitmap = bitmap + bitmap_sec;
    bitmap_bin = bitmap_bin + bitmap_sec_bin;
  }else {
    logService.logEvent("unpacklib.res_decode_response_fields...secondory bitmap is not present!");
  }
  logService.logEvent("unpacklib.res_decode_response_fields...complete bitmap in bin is "+ bitmap_bin)
  iso.response.field_no_present.push(1);
  iso.response.string_data.f1 = bitmap;
  iso.response.pointer = ptr;

  for(var i=1; i<bitmap_bin.length;i++){
    if(bitmap_bin.charAt(i) == 1){
      iso.response.field_no_present.push(i+1);
    }
  }
  logService.logInfo("unpacklib.res_decode_response_fields...response after decoding BITMAP: ",iso.response.field_no_present, iso.response.string_data);
  // console.log("unpacklib.res_decode_response_fields...response after decoding BITMAP:\n", iso.response);
}

function parse_fields(iso){
  let logService = wslogService(iso.wsid)
  logService.logEvent("unpacklib.res_decode_response_fields...parsing data  fields!");
  let sindex = iszerolen(iso.response.string_data.header)? 0: 1;
  let fvalue = 0;
  let ptr = iso.response.pointer;
  let buff_data = iso.response.final_buffer;
  var flist = iso.response.field_no_present;
  let fenc = configlib.read_config("ser_enc_fld");
  for(var i=sindex; i<flist.length; i++){
    let fn = flist[i];
    if(fn>=2){
      let flentype = configlib.read_config("ser_fldn_ltype", fn);
      let flen = configlib.read_config("ser_fldn_max", fn);
      logService.logEvent("unpacklib.res_decode_response_fields...parsing field "+ fn + " length type is " + flentype + " and max length is "+flen+" and encoding is "+fenc + " and pointer is "+ptr);
      if( flentype == 0){
        fvalue = buff_data.toString(fenc, ptr, ptr+flen);
        ptr = ptr + flen;
        iso.response.string_data["f"+fn] = fvalue;
      }else {
        let fheadlen = parseInt (buff_data.toString(fenc, ptr, ptr+flentype) );
        ptr = ptr + flentype;
        fvalue = buff_data.toString(fenc, ptr, ptr+fheadlen);
        ptr = ptr + fheadlen;
        iso.response.string_data["f"+fn] = fvalue;
      }
    }
  }
  iso.response.pointer = ptr;
  logService.logInfo("unpacklib.res_decode_response_fields...response after decoding data fields: ",iso.response.string_data);
}
