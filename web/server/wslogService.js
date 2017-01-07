"use strict"
var websoklib = require('./lib/websock')

function wslogService(wsid){
  let logLevel = 2; //1, 2, 3, 4
  let logobj = {
    logEvent: logEvent,
    logInfo: logInfo
  }
  function logInfo(){

  }

  function logEvent(msg){
    if(logLevel == 2){
      let res = {type: websoklib.msgtype.LOG, data:{
        type: "event",
        log: msg
      }}
      if(!iszerolen(wsid)){
        websoklib.send_msg(wsid, res);
      }

    }
  }


  return logobj;
}

exports = module.exports = wslogService;
