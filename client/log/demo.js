var a = "0200"
var b = Buffer.from(a, 'ascii');
console.log(b);
console.log(b.length);


var a = "C8"
var b = Buffer.from(a, 'hex');
console.log(b);
console.log(b.length);

var a = "C8"
var b = Buffer.from(a, 'ascii');
console.log(b);
console.log(b.length);

function decitohex(data) {
    var result;
    data = parseInt(data);
    result = data.toString(16);
    if( (result.length % 2) != 0 ){
      result = "0" + result;
    }
    return result;
}

console.log(decitohex(001))
