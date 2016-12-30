logService = require('./logService');
configService = require('../../client/lib/configlib')

var routeService = {
    serviceRequest: serviceRequest,
    errorHandler : errorHandler
}

module.exports = routeService;

function serviceRequest(req, res) {
    if(req.params.servicekey == 'transrecieve'){

    }
    var obj = configService.read_config(req.params.servicekey)
    var resObj = {
      'status': 200,
      'response': {data: obj}
    }
    logService.logResponse(resObj)
    res.status(resObj.status).send(resObj.response);
}

function errorHandler(err, req, res, next){
  let errObj = {
    reqMethod: req['method'],
    reqPath: req['path'],
    resCode: 500,
    resErrMessage: err.message,
    resErrStack: err.stack
  }
  var resObj = {
    'status': 500,
    'response': {data: errObj}
  }
  logService.logResponse(resObj)
  res.status(resObj.status).send(resObj.response);
}




function transrecieve(){

}
