var convlib = {
  decitohex: decitohex,
  decitobi: decitobi,
  bitohex: bitohex,
  chartoascidec: chartoascidec,
  hextobi: hextobi,
  hextodeci: hextodeci
}
module.exports = convlib;

function decitohex(data) {
    var result;
    data = parseInt(data);
    result = data.toString(16);
    if( (result.length % 2) != 0 ){
      result = "0" + result;
    }
    return result;
}
function decitobi(data) {
    var result;
    result = data.toString(2);
    return result;
}
function bitohex(data) {
  var result="";
    if( (data.length%4) != 0 ){
      throw new Error('bitohex: invalid binary, lenght must be of multiple of 4')
    }
    for (var i = 0; i < data.length; i += 4) {
        var fourbits = data.substr(i, 4);
        result = result + parseInt(fourbits, 2).toString(16).toUpperCase();
    }
    return result;
}
function chartoascidec(data) {
    var result = "";
    data = data.toString()
    for (var i = 0; i < data.length; i++) {
        var ascicode = data.charCodeAt(i);
        result = result + ascicode;
    }
    return result;
}
function hextobi(data) {
    data = data.toString()
    var result = ""
    var hextobi = {
        "0": "0000",
        "1": "0001",
        "2": "0010",
        "3": "0011",
        "4": "0100",
        "5": "0101",
        "6": "0110",
        "7": "0110",
        "8": "1000",
        "9": "1001",
        "a": "1010",
        "b": "1011",
        "c": "1100",
        "d": "1101",
        "e": "1110",
        "f": "1111"
    }
    var key, value;
    for (var i = 0; i < data.length; i++) {
        key = data.toString().charAt(i).toLowerCase();
        value = hextobi[key];
        if(!value){
          var errst= new Error().stack
          console.log("hextobi: invalid char '%s' in hex string \n%s",key,errst);
          process.exit()
        }
        result = result + value
    }
    return result;
}


function hextodeci(val){
  return parseInt(val.toString(),16)
}
