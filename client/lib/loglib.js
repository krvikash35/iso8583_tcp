var fldlib = require('./field');
var prop = require('../prop')


var loglib = {
  print_org_msg: print_org_msg,
  print_padded_msg: print_padded_msg,
  print_encoded_msg: print_encoded_msg,
  print_debug_msg: print_debug_msg,
  print_err_msg: print_err_msg,
  print_final_msg: print_final_msg,
  print_decoded_message: print_decoded_message
}

module.exports = loglib;

function print_final_msg(iso8583_msg){
  var totallen = iso8583_msg.iso8583_msg_req_final.final_buffer.length;
  var mhl = iso8583_msg.iso8583_msg_req_final.header_len;
  var mhv = iso8583_msg.iso8583_msg_req_final.header_value;
  var mbl  = null;
  var isheadincl = iso8583_msg.iso8583_msg_req_final.include_header;
  var headenc = iso8583_msg.iso8583_msg_req_final.header_enc;
  var final_buffer = iso8583_msg.iso8583_msg_req_final.final_buffer;
  var isheadincl_formsgcal = prop.include_header_for_msglen_cal
  if(isheadincl){
    mbl = totallen - mhl
  }else {
    mbl = totallen;
  }

  console.log('\n\n######################## START HEADER DETAILS ##########################');
  console.log('HEAD_INCLUDE','INHD_MSCAL','HEAD_VAL', 'HEAD_ENCODE', 'HEAD_LEN', 'MESSAGE_LEN');
  console.log( pad(isheadincl,12),pad(isheadincl_formsgcal,10),pad(mhv,8), pad(headenc,11), pad(mhl,8),pad(mbl,11) );
  console.log('######################## END HEADER DETAILS ##########################');

  console.log('######################## START FINAL MESSAGE ##########################');
  console.log( final_buffer );
  console.log('######################## END FINAL MESSAGE ##########################');
  console.log('Sent Total '+totallen+' Bytes..\n\n');

}
function print_encoded_msg(iso8583_msg){
  var msg = iso8583_msg.iso8583_msg_req_encoded;
  var flds = iso8583_msg.field_no_present;
  var fn = null;
  var fv = null;
  var flt = null;
  var fml = null;
  var fdes = null;
  console.log('\n\n######################## START ENCODED MESSAGE ##########################');
  console.log('FNO', 'ENCODE','FHL', 'FVL', 'WHOLE BUFFER');
  for(var i=0; i<msg.length; i++){
    fn = flds[i];
    fhl = msg[i].field_head_len;
    fbl = msg[i].field_body_len;
    fenc = msg[i].field_enc;
    fval = msg[i].field_value;
    fwb = msg[i].field_whole_buffer;
    fhb = msg[i].field_head_buffer;
    fbb = msg[i].field_body_buffer;
    console.log(pad(fn,3), pad(fenc,6), pad(fhl,3), pad(fbl,3), fwb);
  }
  console.log('######################## END ENCODED MESSAGE ##########################\n\n');
}

function print_padded_msg(iso8583_msg){
  var msg = iso8583_msg.iso8583_msg_req_paded;
  var flds = iso8583_msg.field_no_present;
  var fn = null;
  var fv = null;
  var flt = null;
  var fml = null;
  var fdes = null;
  console.log('\n\n######################## START PADDED MESSAGE ##########################');
  console.log('FNO', pad('FIELD_DESCRIPTION',44),'FTYPE', 'LENTYPE', 'MAX', 'VALUE');
  for(var i=0; i<msg.length; i++){
    fn = flds[i];
    fv = msg[i];
    ft = fldlib.get_fld_type(fn)
    flt = fldlib.get_fld_len_type(fn);
    fml = fldlib.get_fld_len_max(fn);
    fdes = fldlib.get_fld_desc(fn);
    console.log(pad(fn,3),"(", pad(fdes,40),")",pad(ft,5),pad(flt,7), pad(fml,3), fv);
  }
  console.log('######################## END PADDED MESSAGE ##########################\n\n');
}


function print_org_msg(iso8583_msg){
  var msg = iso8583_msg.iso8583_msg_req_origated;
  var flds = iso8583_msg.field_no_present;
  var fn = null;
  var fv = null;
  var flt = null;
  var fml = null;
  var fdes = null;
  console.log('\n\n######################## START ORIGINAL MESSAGE ##########################');
  console.log('FNO', pad('FIELD_DESCRIPTION',44),'FTYPE', 'LENTYPE', 'MAX', 'VALUE');
  for(var i=0; i<msg.length; i++){
    fn = flds[i];
    fv = msg[i];
    ft = fldlib.get_fld_type(fn)
    flt = fldlib.get_fld_len_type(fn);
    fml = fldlib.get_fld_len_max(fn);
    fdes = fldlib.get_fld_desc(fn);
    console.log(pad(fn,3),"(", pad(fdes,40),")",pad(ft,5),pad(flt,7), pad(fml,3), fv);
  }
  console.log('######################## END ORIGINAL MESSAGE ##########################\n\n');
}

function print_debug_msg(){
  if(prop.enable_debug){
    for(var i=0; i<arguments.length; i++){
      console.log(arguments[i]);
    }
  }
}

function print_err_msg(){
  for(var i=0; i<arguments.length; i++){
    console.log(arguments[i]);
  }
  var errst = new Error().stack;
  console.log(errst);
  process.exit()
}




function print_decoded_message(buff_res){
  var fprsnt = buff_res.decode.body.fprsnt;
  var mheadval = buff_res.decode.header.value;
  var mheadlen = buff_res.decode.header.len;
  var fheadval = buff_res.decode.body.fheadval;
  var fbodyval = buff_res.decode.body.fbodyval;
  var fn = null;
  var fv = null;
  var flt = null;
  var fml = null;
  var fdes = null;

  console.log('######################## START RESPONSE HEADER DETAILS##########################');
  if(prop.server.header.include_header){
    console.log( pad('HEAD_LEN',8), pad('HEAD_VAL',8) );
    console.log( pad(mheadlen,8), pad(mheadval,8) );
  }else {
    console.log('Header is not included: server response is without header');
  }
  console.log('######################## END RESPONSE HEADER DETAILS##########################');

  console.log('######################## START RESPONSE MESSAGE DETAILS##########################');
  console.log( pad('FNO',3), pad('FIELD_DESCRIPTION',34), pad('LENTYPE',7), pad('FHV',3), 'FIELD_VALUE' );
  for(var i=0; i<fprsnt.length; i++){
    fn = fprsnt[i];
    fv = fbodyval[i];
    fhv = fheadval[i];
    ft = fldlib.get_fld_type(fn)
    flt = fldlib.get_fld_len_type(fn);
    fml = fldlib.get_fld_len_max(fn);
    fdes = fldlib.get_fld_desc(fn);
    console.log( pad(fn,3), "(",pad(fdes,30),")", pad(flt,7), pad(fhv,3), fv );
  }
  console.log('######################## END RESPONSE MESSAGE DETAILS##########################');
}
