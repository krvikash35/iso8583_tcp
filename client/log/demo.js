var a = "82200000000000000400000000000000"
var b_hex = Buffer.from(a, 'hex');
console.log(b_hex.length);

var b_hex = Buffer.from(a, 'ascii');
console.log(b_hex.length);

var b_hex = Buffer.from(a, 'binary');
console.log(b_hex.length);
