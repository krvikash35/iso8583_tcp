var prop = {
  server_host: '10.66.118.36', //localhost:6969, 10.66.118.36:16902(maria), 16897(swif) bl4u1225
  server_port: "16902",      //6969 16902
  iso_version: '1993', //1987 or 1993
  encode: {
    use_defualt_encode: false,      // dont change to true, as of now no implementation
    header_encode: 'ascii',         //  ascii, utf8, base64, binary, hex
    mti_encode: 'ascii',
    bitmap_encode: 'hex',
    field_num_encode: 'ascii',
    field_alphanum_encode: 'ascii',
    var_len_field_headr_encode: 'ascii'
  },
  include_header:  true, //true, false
  include_header_for_msglen_cal: true,
  header_len: 2
}

module.exports = prop;
