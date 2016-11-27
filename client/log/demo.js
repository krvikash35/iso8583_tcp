var headerlen = '29'
var headBuffer = Buffer.alloc(2);
var len = headBuffer.write(headerlen,0,2,'hex')
console.log(len);
console.log(headBuffer);
