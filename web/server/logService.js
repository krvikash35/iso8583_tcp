var loglib = require(__proot+'/client/lib/loglib')
const util = require('util');

var logService = {
  logRequest: logRequest,
  logResponse: logResponse
}

module.exports = logService;

function logRequest(req, res, next){
  var reqobj = {
    'method': req['method'],
    'url': req['originalUrl'],
    'origin': req.headers['origin'],
    'referer': req.headers['referer'],
    'content-type': req.headers['content-type'],
    'body': req.body
  }
  // console.log(util.inspect(reqobj, false, null))
  loglib.print_http_request_response('Got request from client http: ', reqobj )
  next()
}

function logResponse(resobj){
  loglib.print_http_request_response('Sent response to client http: ', resobj )
}
