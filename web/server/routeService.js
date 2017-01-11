"use strict"
var logService = require('./logService');
var wslogService = require('./wslogService');
var configlib = require('./lib/config');
var packlib = require('./lib/pack');
var socklib = require('./lib/sock');
var unpacklib = require('./lib/unpack');


var routeService = {
    getDefaultData: getDefaultData,
    transrecieve: transrecieve,
    catchAllHandler: catchAllHandler
    // wstester: wstester
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
  // console.log("Befor: ", configlib.read_config("per_log_level") );
  configlib.update_prop(req.body);
  let logService = wslogService(req.body.wsid);
  logService.logEvent("routeService.transrecieve...Gor transrecieve request from http client, set user specific profile/properties!")
  packlib.init_gen_bitmap(req.body)
    .then(function(data){
      return packlib.encode_request_fields(data)
    })
    .then(function(data){
      return packlib.add_header(data);
    })
    .then(function(data){
      return socklib.createNewSockConnAndSend(data);
    })
    .then(function(data){
      return unpacklib.decode_response_fields(data)
    })
    .then(function(data, wsid){
      logService.logEvent("routeService.transrecieve...Sent response to http client!")
      responseHandler(200, data, res);
    })
    .catch(function(err){
      logService.logEvent("routeService.transrecieve...Sent ERROR response to http client!")
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
  console.log("init_gen_bitmap");
  logService.logEvent("routeService.errorHandler...Sent ERROR response to http client!")
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
  logService.logEvent("routeService.catchAllHandler...Sent ERROR response (STATUS_CODE 500) to http client!")
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


// function wstester(req, res){
//   let reqmsg = req.query.name
//   let wsid = req.query.wsid
//   // let wslogService = wslogService(wsid)
//   //  let logService = require('./wslogService')(wsid);
//   logService.setwsid(wsid);
//   let logService = require('./logService');
//
//   let intervalInSecond = 2;
//   let resmsg = "Hi "+reqmsg;
//   let i =0;
//   let intfn = setInterval(()=> {
//     i = i+1;
//     console.log("value of wsid stack ", wsid);
//     // logService.setwsid(wsid);
//     // wslogService.logEvent(resmsg+i)
//     logService.logEvent(resmsg+i)
//   }, intervalInSecond*1000);
//
//   setTimeout(() => {
//      clearInterval(intfn);
//      res.status(200).send("Hi "+reqmsg+" from server")
//      console.log("response sent");
//    },15*1000)
// }
