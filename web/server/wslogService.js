"use strict"
var websoklib = require('./lib/websock');
var configlib = require('./lib/config')

function wslogService(wsid){
  let logLevel = 2; //1, 2, 3, 4
  let islogenabled = configlib.read_config("per_log_enable")
  let res = {
    type: websoklib.msgtype.LOG,
    data:{
      type: "",
      log: ""
    }
  }
  let logobj = {
    logEvent: logEvent,
    logInfo: logInfo,
    print_bin_asci_msg: print_bin_asci_msg
  }


  function logEvent(msg){
        if(!islogenabled)
          return
        res.data.type = "event";
        res.data.log = msg;
        websoklib.send_msg(wsid, res);
  }

  function logInfo(){
    if(!islogenabled)
      return
    let msg = ""
    for(var i=0; i<arguments.length; i++){
      msg = msg + JSON.stringify(arguments[i], null, 4) + "\n"
    }
    res.data.type = "info";
    res.data.log = msg;
    websoklib.send_msg(wsid, res);
  }

  function print_bin_asci_msg(buffer,desc){
    if(!islogenabled)
      return
    res.data.type = "isomsgbytes";
    desc?desc=desc:desc="";
    var buf = buffer;
    res.data.log = "Total " + buf.length + " Bytes "+ desc +"..\nBinary Data...";
    websoklib.send_msg(wsid, res);
    var data_bin = ''
    var temp;
    for(var i=0; i<buf.length; i++){
      temp = buf.toString('hex', i, i+1)
      data_bin = data_bin + pad(temp, 3, 'r', ' ');
    }
    res.data.log = data_bin+"\nAscii Data...";
    websoklib.send_msg(wsid, res);
    var data_ascii = ''
    var temp;
    for(var i=0; i<buf.length; i++){
      temp = buf.toString('ascii', i, i+1)
      data_ascii = data_ascii + pad(temp, 3, 'r', ' ');
    }
    res.data.log = data_ascii
    websoklib.send_msg(wsid, res);
  }
  return logobj;
}

exports = module.exports = wslogService;
