var prop = {
  server_host: '10.66.118.36', //localhost:6969, 10.66.118.36:17902(mnmr),   10.66.118.51:7021(chlk)
  server_port: "17902",      //6969 16902
  iso_version: '1987', //1987 or 1993
  encode: {
    use_defualt_encode: false,      // dont change to true, as of now no implementation for true
    header_encode: 'ascii',         //  hex, ascii, chexehex, chexeascii
    mti_encode: 'ascii',            //  hex, ascii, chexehex, chexeascii
    bitmap_encode: 'hex',           //  hex ascii
    field_num_encode: 'ascii',      //  hex, ascii, chexehex, chexeascii
    field_alphanum_encode: 'ascii', //  ascii
    var_len_field_headr_encode: 'perfieldtype' //hex, ascii, chexehex, chexeascii, perfieldtype
  },
  include_header:  true, //true, false
  include_header_for_msglen_cal: true,
  header_len: 4,
  enable_debug: true
}

module.exports = prop;
/*
1. default and all possible value for all configuration has been provided in comment.
2. as of know, chexehex and chexeascii is only supported while encoding and sending to server, decoding support not added yet.
3. so mostly use ascii and hex for stability reason.
4. change the field definition file as per the server field definition or vice versa


header encoding: header_length: 2 decimal_value: 41 encoding_format: hex encoding_value: 0041
Pid: 31408 02/12/2016 17:28:13.329 Received 2 Bytes
00 41                                           .A

header encoding: header_length: 2 decimal_value: 41 encoding_format: ascii encoding_value: 41
Pid: 31408 02/12/2016 17:27:37.119 Received 2 Bytes
34 31                                           41

header encoding: header_length: 2 decimal_value: 41 encoding_format: chexehex encoding_value: 0029
Pid: 31408 02/12/2016 17:29:02.963 Received 2 Bytes
00 29                                           .)

header encoding: header_length: 2 decimal_value: 41 encoding_format: chexeascii encoding_value: 29
Pid: 31408 02/12/2016 17:30:39.026 Received 2 Bytes
32 39                                           29
*/
