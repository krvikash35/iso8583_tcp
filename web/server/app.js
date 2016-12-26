var exp = require('express');
var app = exp();
var http = require('http').Server(app);

global.__proot = __dirname + "/../..";
app.use('/node_modules', exp.static(__proot + '/node_modules'));
app.use('/', exp.static(__proot + '/web/client'));
app.use('/app/*', exp.static(__proot + '/web/client'));


http.listen(3000, function(){
  console.log('listening on *:3000');
});
