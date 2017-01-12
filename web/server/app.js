'use strict'
require('./lib/global');
global.__proot = __dirname + "/../..";
var os = require('os');
var WebSocketServer = require("ws").Server;
var exp = require('express');
var app = exp();
var websoklib = require('./lib/websock');
// var http = require('http').Server(app);
var httpserver = require('http').createServer(app);
var routeService = require('./routeService');
var logService = require('./logService');
var wslogService = require('./wslogService')();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}))


app.use(bodyParser.json())
app.use('/node_modules', exp.static(__proot + '/node_modules'));
app.use('/public', exp.static(__proot + '/web/server/public'));

let HTTP_PORT;
if(process.env.NODE_ENV_ISO8583_BUILD=='prod'){
  console.log("\nTHIS BUILD IS RUNNING IN PRODUCTION MODE");
  HTTP_PORT = process.env.PORT || 3001
  app.use('/', exp.static(__proot + '/web/client/aot'));
  app.use('/app/*', exp.static(__proot + '/web/client/aot'));
}else{
  console.log("\nTHIS BUILD IS RUNNING IN DEVELOPMENT MODE");
  HTTP_PORT = 3002
  app.use('/', exp.static(__proot + '/web/client'));
  app.use('/app/*', exp.static(__proot + '/web/client'));
}
// process.on('uncaughtException', (err) => {
//   console.log('uncaughtException', err);
// })


app.use(logService.logRequest)
app.get('/service/getDefaultData', routeService.getDefaultData);
app.post('/service/transrecieve', routeService.transrecieve);
// app.get('/service/wstester', routeService.wstester)

app.use(routeService.catchAllHandler)

process.on('uncaughtException', function(err) {
    if(err.errno === 'EADDRINUSE')
         console.log("Could not bind http server to given port ", err.port, " this port is already in use, please use free port");
    else
         console.log(err);
    process.exit(1);
});

httpserver.listen(HTTP_PORT, function(err) {
    let httpAddress = httpserver.address()
    console.log("\nHTTP SERVER LISTENING ON ");
    console.log("HOSTNAME: ", os.hostname());
    console.log("PORT: ", httpAddress.port);
    console.log("IP: ", httpAddress.address);
    console.log("IP Family: ",httpAddress.family);
});


var wss = new WebSocketServer({
    server: httpserver
});
wss.on("connection", (ws) => {
  websoklib.add_new_ws_conn(ws);
  ws.on("close", (data) => {
      websoklib.close_ws_conn_byid(ws.id)
  })
  ws.on("message", (data) => {
      websoklib.receive_msg(ws.id, data)
  })
});
console.log("\nWEBSOCKET SERVER LISTENING ON HTTP SERVER PORT");
