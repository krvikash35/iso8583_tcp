//This is patch that can generate subfield
var loglib = require('./loglib')

var subfldlib = {
  addsubfield: addsubfield
}

module.exports = subfldlib

var subfield_str = {
  parent_fn: '',
  bitmap_hex: 0,
  bitmap_bin: 0,
  fld_prsnt: [],
  fld_value: [],
  fld_buffer: [],
  final_buffer: null
}
function addsubfield(msg){
  read_subfld_data_genbitmap(subfield_str)

}

function read_subfld_data_genbitmap(subfield_str){
  loglib.print_debug_msg("patch: checking if any subfield is present and readjust that field per config")
  var data = require('../data/data');
  if(!data.subfield){
    loglib.print_debug_msg("no subfield present");
    return
  }
  data = data.subfield;
  loglib.print_debug_msg("checking which field is present for considering subfield")
  for(var i=2; i<128; i++){
    if (data[f+i])
  }
  var data = data.subfield
  for(var i=0; i<65; i++){

  }

}
