//This is patch that can generate subfield for only one parent field ie. 127 having 127.1, 127.2, 127.3 etc..
var loglib = require('./loglib')
var convlib = require('./convert')
// var fldlib = require('./field');
var configlib = require('./configlib')

var subfldlib = {
    addsubfield: addsubfield
}

module.exports = subfldlib

var subfield_str = {
    parent_fn: '',
    bitmap_hex: null,
    bitmap_bin: "1",
    fld_prsnt: [],
    fld_value: [],
    fld_buffer: [],
    final_buffer: null
}

function addsubfield(isomsg) {
    if ( read_subfld_data_genbitmap(subfield_str) == -1){
      return
    }

    encode_subfld_data(subfield_str);
    prepare_final_buffer(subfield_str);
    place_subfld_in_isomsg(isomsg, subfield_str);
}

function read_subfld_data_genbitmap(subfield_str) {
    loglib.print_debug_msg("patch: checking if any subfield is present and readjust that field per config")
    var data = require('../data/data');
    if (!data.subfield) {
        loglib.print_debug_msg("no subfield present");
        return -1
    }
    data = data.subfield;
    loglib.print_debug_msg("checking which field is present for considering subfield")
    for (var i = 2; i < 128; i++) {
        if (data["f" + i]) {
            data = data["f" + i]
            subfield_str.parent_fn = i;
            loglib.print_debug_msg("Field no " + i + " is present");
            break;
        }
    }

    loglib.print_debug_msg('generting bitmap')
    var k = 1;
    for (var i = 2; i <= 64; i++) {
        if (data["f" + i]) {
            subfield_str.bitmap_bin = subfield_str.bitmap_bin + "1"
            subfield_str.fld_prsnt[k] = i;
            subfield_str.fld_value[k] = data["f" + i];
            k = k + 1;
        } else {
            subfield_str.bitmap_bin = subfield_str.bitmap_bin + "0"
        }
    }
    loglib.print_debug_msg('bitmap_bin: ' + subfield_str.bitmap_bin)
    subfield_str.bitmap_hex = convlib.bitohex(subfield_str.bitmap_bin)
    loglib.print_debug_msg('bitmap_hex: ' + subfield_str.bitmap_hex)
    subfield_str.fld_prsnt[0] = 1;
    subfield_str.fld_value[0] = subfield_str.bitmap_hex;
}


function encode_subfld_data(subfield_str) {
    var sfn, sfv, sfenc, sflt, sfml;
    for (var i = 0; i < subfield_str.fld_prsnt.length; i++) {
        sfn = subfield_str.fld_prsnt[i];
        sfv = subfield_str.fld_value[i].toString();
        sfenc = get_subfld_encoding(subfield_str.parent_fn, sfn)
        sflt = get_subfld_lentype(subfield_str.parent_fn, sfn)
        sfml = get_subfld_maxlen(subfield_str.parent_fn, sfn)
        loglib.print_debug_msg("sfn: " + sfn + " sfv: " + sfv + " sfenc: " + sfenc + " sflt: " + sflt + " sfml: " + sfml);
        switch (sflt) {
            case "CONTVAR":
                var buf = Buffer.from(sfv, sfenc)
                subfield_str.fld_buffer[i] = buf
                loglib.print_debug_msg('wrote: ', buf)
                break;
            case "FIXED":
                sfv = pad(sfv, sfml, 'l', ' ')
                var buf = Buffer.from(sfv, sfenc)
                subfield_str.fld_buffer[i] = buf
                loglib.print_debug_msg('wrote: ', buf)
                break;
            default:
              var varlen = sflt.indexOf('V')
              loglib.print_debug_msg('length of variable length type field is : '+varlen)
              var fvbuf = Buffer.from(sfv, sfenc);
              var fhval = fvbuf.length;
              fhval = pad(fhval, varlen, 'l', '0');
              loglib.print_debug_msg('field header value is: '+ fhval)
              var fhbuf = Buffer.from(fhval, sfenc)
              var buf = Buffer.concat([fhbuf, fvbuf], fhbuf.length + fvbuf.length);
              subfield_str.fld_buffer[i] = buf
              loglib.print_debug_msg('wrote: ', buf)
              break;

        }
    }
}

function get_subfld_encoding(prntfld, subfld) {
    var fdef = configlib.read_config("cli_fld_def");
    // console.log(fdef["f" + prntfld]);
    var enc = fdef["f" + prntfld].subfield["f" + subfld].encode;
    if (!enc) {
        enc = 'ascii';
    }
    return enc;
}


function get_subfld_lentype(prntfld, subfld) {
    var fdef = configlib.read_config("cli_fld_def");
    var lentype = fdef["f" + prntfld].subfield["f" + subfld].lentype;
    return lentype;
}


function get_subfld_maxlen(prntfld, subfld) {
    var fdef = configlib.read_config("cli_fld_def");
    var maxlen = fdef["f" + prntfld].subfield["f" + subfld].maxlen;
    return maxlen;
}


function prepare_final_buffer(subfield_str){
  var fhv = 0
  var flt = configlib.read_config("cli_fldn_ltype", subfield_str.parent_fn);
  var fhenc = configlib.read_config("cli_enc_fld");
  var varlen = flt.indexOf('V')
  var fbuflist = [];
  for (var i = 0; i < subfield_str.fld_prsnt.length; i++) {
    // console.log("subfield no: %s buffer %s length %s",i,subfield_str.fld_buffer[i], subfield_str.fld_buffer[i].length);
    fhv = fhv + subfield_str.fld_buffer[i].length
    fbuflist[i] = subfield_str.fld_buffer[i]
  }
  loglib.print_debug_msg('field header value for field '+ subfield_str.parent_fn + ' is '+fhv + ' field len type is '+flt)
  fhv = pad(fhv, varlen, 'l', '0');
  var fvbuf = Buffer.concat(fbuflist, fhv);
  var fhbuf = Buffer.from(fhv, fhenc);
  var buf = Buffer.concat([fhbuf, fvbuf], fhbuf.length + fvbuf.length);
  subfield_str.final_buffer = buf;
  loglib.print_debug_msg('subfield total bytes: '+buf.length+ ' header bytes: '+fhbuf.length+' body bytes: '+fvbuf.length)
  loglib.print_debug_msg('wrote ', buf)
}

function place_subfld_in_isomsg(msg, subfld){
  var fldpos = null;
  for(var i=0; i<msg.field_no_present.length; i++){
    if( msg.field_no_present[i] == subfld.parent_fn ){
      fldpos = i;
      break;
    }
  }
  if(!fldpos){
    loglib.print_err_msg('subfield parent field '+subfld.parent_fn+" not found in original iso msg..make sure to add dummy value")
  }
  loglib.print_debug_msg('found field position: ' + fldpos + " will be readjust")
  msg.iso8583_msg_req_encoded[fldpos].field_whole_buffer = subfld.final_buffer
}
