var prop = {
  server_host: 'localhost', //localhost:6969, 10.66.118.36:16902(maria), 16897(swif) bl4u1225
  server_port: "6969",      //6969 16902
  iso_version: '1987', //1987 or 1993
  encode: {
    use_defualt_encode: false,      // dont change to true, as of now no implementation for true
    header_encode: 'ascii',         //  hex, ascii, chexehex, chexeascii
    mti_encode: 'ascii',            //  hex, ascii, chexehex, chexeascii
    bitmap_encode: 'hex',
    field_num_encode: 'ascii',      //  hex, ascii, chexehex, chexeascii
    field_alphanum_encode: 'ascii', //ascii
    var_len_field_headr_encode: 'perfieldtype' //hex, ascii, chexehex, chexeascii, perfieldtype
  },
  include_header:  true, //true, false
  include_header_for_msglen_cal: true,
  header_len: 2
}

module.exports = prop;
