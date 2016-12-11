/* pass fields data in below format: sample
* give below is sample important fields
*/

fvalues = {
  f0: '0800',
  f2: '123456789',
  f7: '1126050144',
  f11: '307448',
  f70: '301',
  f127: ' ',
  f128: '88888888',
  subfield: {
    f127: {
      f2: '9980662980',
      f3: 'vikash'
    }
  }

}

//“SAF<STAN_OF_REQUEST_TO_BE_ARCHIVED><COMMAND><TRAN_DATE_TIME><DCC_ID><CUST_OR_CARD_ID>”
module.exports = fvalues;
//0000010010321500
//0000000000000500
