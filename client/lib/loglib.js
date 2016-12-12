var prop = require('../config/prop');
var loglevel = prop.loglevel


var loglib = {
  print_padded_msg: print_padded_msg,
  print_encoded_msg: print_encoded_msg,
  print_debug_msg: print_debug_msg,
  print_err_msg: print_err_msg,
  print_decoded_message: print_decoded_message,
  print_bin_asci_msg: print_bin_asci_msg
}

module.exports = loglib;
var configlib = require('./configlib');

function print_encoded_msg(iso8583_msg){
  if ( !(loglevel>=3) ){
    return;
  }
  var msg = iso8583_msg.iso8583_msg_req_encoded;
  var flds = iso8583_msg.field_no_present;
  var fn = null;
  var fv = null;
  var flt = null;
  var fml = null;
  var fdes = null;
  var hdr_fno = 'HDR';
  var hdr_inc = iso8583_msg.iso8583_msg_req_final.include_header
  var hdr_enc = iso8583_msg.iso8583_msg_req_final.header_enc
  var hdr_val_len = iso8583_msg.iso8583_msg_req_final.header_len
  var hdr_buf = iso8583_msg.iso8583_msg_req_final.header_buf
  console.log('\n\n######################## START ENCODED MESSAGE ##########################');
  console.log('FNO', 'ENCODE','FHL', 'FVL', 'WHOLE BUFFER');
  hdr_inc?console.log(pad(hdr_fno,3), pad(hdr_enc,6), pad("0",3), pad(hdr_val_len,3), hdr_buf):'';
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
  if( ! (loglevel>= 1) ){
    return ;
  }
  var msg = iso8583_msg.iso8583_msg_req_paded;
  var msg_org = iso8583_msg.iso8583_msg_req_origated;
  var flds = iso8583_msg.field_no_present;
  var fn = null;
  var fv = null;
  var flt = null;
  var fml = null;
  var fdes = null;
  console.log('######################## START ORIGINAL AND PADDED MESSAGE ##########################');
  console.log('FNO', pad('FIELD_DESCRIPTION',44),'FTYPE', 'LENTYPE', 'MAX', pad('ORIGINAL VALUE MAX 40 CHAR SHOWN HERE..',40), 'PADDED VALUE IF REQUIRED NO LIMIT ON CHAR HERE');
  for(var i=0; i<msg.length; i++){
    fn = flds[i];
    fv = msg[i];
    fvo = msg_org[i];
    ft = configlib.read_config("cli_fldn_type", fn);
    flt = configlib.read_config("cli_fldn_ltype", fn);
    fml = configlib.read_config("cli_fldn_max", fn);
    fdes = configlib.read_config("cli_fldn_des", fn);
    console.log(pad(fn,3),"(", pad(fdes,40),")",pad(ft,5),pad(flt,7), pad(fml,3),pad(fvo,40),"'"+fv+"'" );
  }
  console.log('######################## END ORIGINAL AND PADDED MESSAGE ##########################');
}


function print_debug_msg(){
  if(loglevel >= 4){
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


function print_bin_asci_msg(buffer,desc){
  if( !(loglevel >= 2) ){
    return;
  }
  desc?desc=desc:desc="";
  var buf = buffer;
  console.log("Total " + buf.length + " Bytes "+ desc +"..");
  console.log("Binary Data...");
  var data_bin = ''
  var temp;
  for(var i=0; i<buf.length; i++){
    temp = buf.toString('hex', i, i+1)
    data_bin = data_bin + pad(temp, 3, 'r', ' ');
  }
  console.log(data_bin);
  console.log("Ascii Data...");
  var data_ascii = ''
  var temp;
  for(var i=0; i<buf.length; i++){
    temp = buf.toString('ascii', i, i+1)
    data_ascii = data_ascii + pad(temp, 3, 'r', ' ');
  }
  console.log(data_ascii);

}


function print_decoded_message(buff_res){
  if( !(loglevel >= 1) )
  return
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



  console.log('######################## START RESPONSE MESSAGE DETAILS##########################');
  console.log( pad('FNO',3), pad('FIELD_DESCRIPTION',34), pad('LENTYPE',7), pad('FHV',3), 'FIELD_VALUE' );
  for(var i=0; i<fprsnt.length; i++){
    fn = fprsnt[i];
    fv = fbodyval[i];
    fhv = fheadval[i];
    ft = configlib.read_config("ser_fldn_type",fn);
    flt = configlib.read_config("ser_fldn_ltype",fn);
    fml = configlib.read_config("ser_fldn_max",fn);
    fdes = configlib.read_config("ser_fldn_des",fn);
    console.log( pad(fn,3), "(",pad(fdes,30),")", pad(flt,7), pad(fhv,3), fv );
  }
  console.log('######################## END RESPONSE MESSAGE DETAILS##########################');
}
