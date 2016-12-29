global.__proot = __dirname + "/../..";
var exp = require('express');
var app = exp();
var http = require('http').Server(app);
var routeService = require('./routeService');
var logService = require('./logService')


app.use('/node_modules', exp.static(__proot + '/node_modules'));
app.use('/', exp.static(__proot + '/web/client'));
app.use('/app/*', exp.static(__proot + '/web/client'));
app.use(logService.logRequest)
app.get('/service/:servicekey', routeService.serviceRequest);
http.listen(3000, function(){
  console.log('listening on *:3000');
});
