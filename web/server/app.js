'use strict'
require('./lib/global');
global.__proot = __dirname + "/../..";
var WebSocketServer = require("ws").Server;
var exp = require('express');
var app = exp();
var websoklib = require('./lib/websock');
// var http = require('http').Server(app);
var httpserver = require('http').createServer(app);
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
// process.on('uncaughtException', (err) => {
//   console.log('uncaughtException', err);
// })
app.use(logService.logRequest)
app.get('/service/getDefaultData', routeService.getDefaultData);
app.post('/service/transrecieve', routeService.transrecieve);
// app.get('/service/wstester', routeService.wstester)

app.use(routeService.catchAllHandler)
httpserver.listen(3000, function() {
    console.log('listening on *:3000');
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
console.log("websocket server created");
