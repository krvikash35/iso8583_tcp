var loglib = require(__proot+'/client/lib/loglib')

var logService = {
  logRequest: logRequest,
  logResponse: logResponse
}

module.exports = logService;

function logRequest(req, res, next){
  var reqobj = {
    'Method': req['method'],
    'originalUrl': req['originalUrl'],
    'path': req['path'],
    'RequestQuery': req['query'],
    'ResquestBody': req.body,
    'StatusCode': res['statusCode '],
    'StatusCode1': res.statusCode,
    'ResponseBody1': res.body,

  }
  loglib.print_debug_msg('Got request: ', reqobj )
  next()
}


function logResponse(req, res, next){
  var resobj = {
    'ResponseBody': res['body'],
    'ResponseBody1': res.body,
    'StatusCode1': res.statusCode,
  }
  loglib.print_debug_msg('Sent response: ', resobj )
  next()
}
