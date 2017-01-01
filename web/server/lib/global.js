'use strict'
function pad(data, max, rorl, char){
  var datastr = data.toString();
  var datalen = datastr.length;
  if(datalen > max){
    return datastr.substring(0,max);
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


function isnum(data){
  if( iszerolen(data) ){
    return false;
  }
  var datastr = data.toString();
  var datalen = datastr.length;
  var charcode = null;
  for( var i=0; i<datalen; i++ ){
    charcode = datastr.charCodeAt(i);
    if(  charcode < 48 || charcode > 57 ){
      return false;
    }
  }
  return true;
}


function iszerolen(data){
  if(data === undefined || data === null){
    return true;
  }
  if( data.toString().length == 0){
    return true;
  }
  return false;
}

function numComparator(a, b){
  if (a < b) {
      return -1
  }
  if (a > b) {
      return 1;
  }
  return 0
}
global.pad = pad;
global.isnum = isnum;
global.iszerolen = iszerolen;
global.numComparator = numComparator;
