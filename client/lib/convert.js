var convlib = {
  decitohex: decitohex,
  decitobi: decitobi,
  bitohex: bitohex,
  chartoascidec: chartoascidec
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
