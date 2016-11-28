var convlib = {
  decitohex: decitohex,
  decitobi: decitobi,
  bitohex: bitohex,
  chartoascidec: chartoascidec,
  hextobi: hextobi
}
module.exports = convlib;

function decitohex(data) {
    var result;
    data = parseInt(data);
    result = data.toString(16);
    return result;
}
function decitobi(data) {
    var result;
    result = data.toString(2);
    return result;
}
function bitohex(data) {
    var result = "";
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
function hextobi(data){
  var result = ""
  var hextobi ={
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
    "A": "1010",
    "B": "1011",
    "C": "1100",
    "D": "1101",
    "E": "1110",
    "F": "1111"
  }

  for(var i=0; i<data.length; i++){
    result = result + hextobi[parseInt(data.toString().charAt(i))]
  }

return result;
}
