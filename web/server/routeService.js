logService = require('./logService');
configService = require('../../client/lib/configlib')

var routeService = {
    serviceRequest: serviceRequest,
    errorHandler: errorHandler
}

module.exports = routeService;

function serviceRequest(req, res) {
    var data, err;
    if (req.params.servicekey == 'transrecieve') {
        data = transrecieve()
    } else {
        data = configService.read_config(req.params.servicekey)
    }
    var resObj = {
        'status': 200,
        'response': {
            data: data
        }
    }
    logService.logResponse(resObj)
    res.status(resObj.status).send(resObj.response);
}

function errorHandler(err, req, res, next) {
    var errObj = {
        reqMethod: req['method'],
        reqPath: req['path'],
        resCode: 500,
        resErrMessage: err.message,
        resErrStack: err.stack
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




function transrecieve(prop) {
    var data = {
        f0: '1200',
        f3: '400000'
    }
    return data;
}
