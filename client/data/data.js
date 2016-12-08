/* pass fields data in below format: sample
* give below is sample important fields
*/

fvalues = {
  f0: '1200',
  f3: '400000',
  f4: '0000010010321700',
  f11: '000000000008',
  f12: '20161106183420',
  f17: '20161206',
  f24: '200',
  f32: '23',
  f34: 'COR',
  f49: 'INR',
  f56: '1200000000045353201610211010101100000004535',
  f102: '           102     RAVISB007          ',
  f103: '             102     RETACHSB1          ',
  f123: 'COR',
  f125: 'this Funds Transfer transaction was posted by FI',
  f127: ' ',
  subfield: {
    f127: {
      f2: 'vikash',
      f3: 'kumar'
    }
  }

}

//“SAF<STAN_OF_REQUEST_TO_BE_ARCHIVED><COMMAND><TRAN_DATE_TIME><DCC_ID><CUST_OR_CARD_ID>”
module.exports = fvalues;
//0000010010321500
//0000000000000500
