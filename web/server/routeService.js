var logService = require('./logService');
var configlib = require('./lib/config');
var packlib = require('./lib/pack');
var socklib = require('./lib/sock');
var unpacklib = require('./lib/unpack');

var routeService = {
    getDefaultData: getDefaultData,
    transrecieve: transrecieve,
    catchAllHandler: catchAllHandler
}

module.exports = routeService;

function getDefaultData(req, res){
  logService.logEvent('routeService.getDefaultData..request recevied for getting default data');
  configlib.get_default()
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
  packlib.req_init_gen_bitmap(req.body)
    .then(function(data){
      return packlib.req_encode_request_fields(data)
    })
    .then(function(data){
      return packlib.req_add_header(data);
    })
    .then(function(data){
      return socklib.createNewSockConnAndSend(data);
    })
    .then(function(data){
      responseHandler(200, data, res);
    })
    .catch(function(err){
      errorHandler(400, err, res);
    })
}

function responseHandler(status, data, res){
  logService.logEvent("routeService.responseHandler...Sent response to http client!")
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
  logService.logEvent("routeService.errorHandler...Sent response to http client!")
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
