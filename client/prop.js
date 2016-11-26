var prop = {
  server_host: 'localhost',
  server_port: "6969",
  iso_version: '1987', //1987 or 1993
  encode: {
    header_encode: 'ASC',          //  NONE, HEX, BI, ASCHEX, ASCBI
    mti_encode: 'HEX',             //  NONE, HEX, BI, ASCHEX, ASCBI
    bitmap_encode: '',             //  NONE, HEX, BI, ASCHEX, ASCBI
    other_fiedl_encode: ''         //  NONE, HEX, BI, ASCHEX, ASCBI
  },
  include_header_for_msglen:  false //true, false
}

module.exports = prop;
/* example1: VIK =  NONE: VIK,  HEX: NP,    BI: NP,             ASCHEX: 56494B,   ASCBI: 010101100100100101001011
*  example2: 4663 = NONE: 4663, HEX: 1237,  BI: 1001000110111   ASCHEX: 34363633, ASCBI: 00110100001101100011011000110011
*/
