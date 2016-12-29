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
    'ResquestBody': req.body
  }
  loglib.print_debug_msg('Got request: ', reqobj )
  next()
}

function logResponse(resobj){
  loglib.print_debug_msg('Sent response: ', resobj )
}
