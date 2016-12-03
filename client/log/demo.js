function pad(data, max, rorl, char){
  var datastr = data.toString();
  var datalen = datastr.length;
  if(datalen > max){
    return datastr.substring(4,max);
  }
  if(!char){
    char = ' ';
  }
  if(!rorl){
    rorl = 'r';
  }
  var result = ""
  for( var i=0; i<max-datalen; i++ ){
    result = result+char
  }
  if(rorl == 'r'){
    result = data.toString().concat(result)
  }else {
    result = result.concat(data.toString());
  }
  return result;
}

console.log( pad('123456789',5));
