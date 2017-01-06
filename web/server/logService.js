const util = require('util');

var logService = {
  logRequest: logRequest,
  logResponse: logResponse,
  logEvent: logEvent,
  logInfo: logInfo,
  logError: logError
}

module.exports = logService;
var logLevel = 2; //1, 2, 3, 4


function logError(err, msg){
  if(logLevel == 1){
      console.log(msg, err);
  }
}

function logEvent(msg){
  if(logLevel == 2){
      console.log(msg);
  }
}

function logInfo(){
  if(logLevel == 3){
    for(var i=0; i<arguments.length; i++){
      console.log(arguments[i]);
    }
  }
}


function logRequest(req, res, next){
  if(logLevel == 2){
    console.log("routeService.requestHandler...Got request from http client!");
  }
  if(logLevel == 4){
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

  }
  next()
}

function logResponse(resobj){
  if(logLevel == 4){
    console.log('Sent response to http client: ', resobj);
    // console.log('Sent response to http client: ');
    // console.log(util.inspect(resobj, false, null))
  }
}
