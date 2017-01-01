const util = require('util');

var logService = {
  logRequest: logRequest,
  logResponse: logResponse,
  logEvent: logEvent,
  logInfo: logInfo,
  logError: logError
}

module.exports = logService;
function logEvent(msg){
  console.log(msg);
}

function logInfo(){
  for(var i=0; i<arguments.length; i++){
    console.log(arguments[i]);
  }
}

function logError(err, msg){
  console.log(msg, err);
}



function logRequest(req, res, next){
  var reqobj = {
    'method': req['method'],
    'url': req['originalUrl'],
    'origin': req.headers['origin'],
    'referer': req.headers['referer'],
    'content-type': req.headers['content-type'],
    'query:': req.query,
    'body': req.body
  }
  // console.log(util.inspect(reqobj, false, null))
  console.log('Got request from http client: ', reqobj);
  next()
}

function logResponse(resobj){
  // console.log('Sent response to http client: ', resobj);
  console.log('Sent response to http client: ');
  console.log(util.inspect(resobj, false, null))
}
