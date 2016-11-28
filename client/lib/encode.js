var enclib = {
  encode: encode
}
module.exports = enclib;

function encode(data, encode_frmt){
  return  Buffer.from(data, encode_frmt)
}
