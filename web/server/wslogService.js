var websoklib = require('./lib/websock')

function wslogService(wsid){
console.log(wsid);
  var logobj = {
    logEvent: logEvent
  }
  function logEvent(msg){
      websoklib.send_msg(wsid, msg);
  }
  return logobj;
}

exports = module.exports = wslogService;
