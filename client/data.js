/* pass fields data in below format: sample
*
*/

fvalues = {
  f0: '0800',                                       //MTI messge type Indicator
  // f2: '',                                          //PAN
  // f3: '0800',                                      //Processing code
  // f4: '500',                                       //amount
  f7: '1127140000',                                //	Transmission date & time
  f11: '12345',                                    //trace number
  // f17: '1127',                                     //Date, Capture
  // f38: 'UIN000',                                         // Approval Code
  // f39: '000',                                         // Action Code
  // f41: 'INFYFGB2',                                         // Card Acceptor Terminal Id
  f70: '301'
}

module.exports = fvalues;
