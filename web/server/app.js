global.__proot = __dirname + "/../..";
var exp = require('express');
var app = exp();
var http = require('http').Server(app);
var routeService = require('./routeService');
var logService = require('./logService');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use('/node_modules', exp.static(__proot + '/node_modules'));
app.use('/', exp.static(__proot + '/web/client'));
app.use('/app/*', exp.static(__proot + '/web/client'));
process.on('uncaughtException', (err) => {
  console.log('uncaughtException', err);
})
app.use(logService.logRequest)
app.get('/service/getDefaultData', routeService.getDefaultData);
app.post('/service/transrecieve', routeService.transrecieve);
app.use(routeService.catchAllHandler)
http.listen(3000, function(){
  console.log('listening on *:3000');
});
