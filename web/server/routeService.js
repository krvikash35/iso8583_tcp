var loglib = require(__proot + '/client/lib/loglib')
var routeService = {
    serviceRequest: serviceRequest
}

function serviceRequest(req, res) {
    loglib.print_debug_msg("Inside serviceRequest");
    var obj = {
        f11: '000000000042',
        f12: '20161106183420',
    }
    res.status(200).send(obj);
}

module.exports = routeService;
