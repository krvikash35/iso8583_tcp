logService = require('./logService');
configService = require('../../client/lib/configlib')

var routeService = {
    serviceRequest: serviceRequest
}

function serviceRequest(req, res) {
    if(servicekey == 'transrecieve'){

    }
    var obj = configService.read_config(req.params.servicekey)
    var resObj = {
      'status': 200,
      'response': {data: obj}
    }
    logService.logResponse(resObj)
    res.status(resObj.status).send(resObj.response);
}

module.exports = routeService;


function transrecieve(){
  
}
