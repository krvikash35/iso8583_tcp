var fldlib = require('./field');
var prop = require('../prop')


var loglib = {
  print_org_msg: print_org_msg,
  print_debug_msg: print_debug_msg,
  print_err_msg: print_err_msg
}

module.exports = loglib;

function print_org_msg(iso8583_msg){
  var msg = iso8583_msg.iso8583_msg_req_origated;
  var flds = iso8583_msg.field_no_present;
  var fn = null;
  var fv = null;
  var flt = null;
  var fml = null;
  console.log('\n\n################ START ORIGINAL MESSAGE ##################');
  console.log('FNO', 'FTYPE', 'LENTYPE', 'MAX', 'VALUE');
  for(var i=0; i<msg.length; i++){
    fn = flds[i];
    fv = msg[i];
    ft = fldlib.get_fld_type(fn)
    flt = fldlib.get_fld_len_type(fn);
    fml = fldlib.get_fld_len_max(fn);
    console.log(pad(fn,3), pad(ft,5),pad(flt,7), pad(fml,3), fv);
  }
  console.log('################ END ORIGINAL MESSAGE ##################\n\n');
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
