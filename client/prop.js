var prop = {
  server_host: 'localhost',
  server_port: "6969",
  iso_version: '1987', //1987 or 1993
  encode: {
    use_defualt_encode: false,     //if true, will ignore below encode configuration, generally encode based on iso8583 field defenition
    header_encode: 'NUMTOHEX',                        //  NONE, NUMTOHEX, NUMTOHEXTOHEXASC, NUMTOHEXASC
    mti_encode: 'NUMTOHEXASC',                           //  NONE, NUMTOHEX, NUMTOHEXTOHEXASC, NUMTOHEXASC
    bitmap_encode: 'BITOHEX',                         //  NONE, BITOHEX, BITOHEXTOHEXASC
    field_num_encode: 'NUMTOHEXASC',                     //  NONE, NUMTOHEX, NUMTOHEXTOHEXASC, NUMTOHEXASC
    field_alphanum_encode: 'CHARTOHEXASC',       //  NONE, CHARTOHEXASC
    var_len_field_headr_encode: 'NUMTOHEX'            //  NONE, NUMTOHEX, NUMTOHEXTOHEXASC, NUMTOHEXASC
  },
  include_header_for_msglen:  true //true, false
}

module.exports = prop;
/* example1: VIK =  NONE: VIK,  HEX: NP,    BI: NP,             ASCHEX: 56494B,   ASCBI: 010101100100100101001011
*  example2: 4663 = NONE: 4663, HEX: 1237,  BI: 1001000110111   ASCHEX: 34363633, ASCBI: 00110100001101100011011000110011
*/
