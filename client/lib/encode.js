var enclib = {
  encode: encode
}
module.exports = enclib;

function encode(data, encode_frmt){
  return new Buffer.from(data, encode_frmt)
}
