logService = require('./logService');
configlib = require('./lib/configlib');

var routeService = {
    getDefaultData: getDefaultData,
    transrecieve: transrecieve,
    catchAllHandler: catchAllHandler
}

module.exports = routeService;

function getDefaultData(req, res){
  logService.logEvent('routeService.getDefaultData..request recevied for getting default data');
  configlib.get_default(req.query.key)
    .then(function(data){
      logService.logEvent('routeService.getDefaultData..success response with code 200 sent');
      responseHandler(200, data, res)
    })
    .catch(function(err){
      logService.logEvent('routeService.getDefaultData..error response with code 400 sent');
      errorHandler(400, err, res)
    })
}

function transrecieve(req, res){
  logService.logResponse(resObj)
  res.status(resObj.status).send(resObj.response);
}

function responseHandler(status, data, res){
  var resObj = {
      'status': status,
      'response': {
          data: data
      }
  }
  logService.logResponse(resObj)
  res.status(resObj.status).send(resObj.response);
}

function errorHandler(status, err, res){
  var errObj = {
    'name':  err.name,
    'message': err.message,
    'stack': err.stack
  }
  var resObj = {
      'status': status,
      'response': {
          data: errObj
      }
  }
  // console.log(resObj.response.data.stack);
  logService.logResponse(resObj)
  res.status(resObj.status).send(resObj.response);
}

function catchAllHandler(err, req, res, next) {
    var errObj = {
      'method': req['method'],
      'url': req['originalUrl'],
      'origin': req.headers['origin'],
      'referer': req.headers['referer'],
      'content-type': req.headers['content-type'],
      'query:': req.query,
      'body': req.body,
      'resCode': 500,
      'resErrMessage': err.message,
      'resErrStack': err.stack
    }
    var resObj = {
        'status': 500,
        'response': {
            data: errObj
        }
    }
    logService.logResponse(resObj)
    res.status(resObj.status).send(resObj.response);
}
