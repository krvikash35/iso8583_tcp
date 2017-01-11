var fs = require('fs');
var resources = [
  'node_modules/core-js/client/shim.min.js',
  'node_modules/zone.js/dist/zone.min.js'
];
resources.map(function(f) {
  var path = f.split('/');
  var t = 'web/client/aot/' + path[path.length-1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});

var resources1 = [
  'web/client/app/public/css/mycss/dist/css/material.css',
];
resources1.map(function(f) {
  var path = f.split('/');
  var t = 'web/client/aot/style/css/' + path[path.length-1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});


var resources2 = [
  'web/client/app/public/css/mycss/dist/fonts/icon/MaterialIcons-Regular.svg',
  'web/client/app/public/css/mycss/dist/fonts/icon/MaterialIcons-Regular.ttf',
  'web/client/app/public/css/mycss/dist/fonts/icon/MaterialIcons-Regular.woff',
  'web/client/app/public/css/mycss/dist/fonts/icon/MaterialIcons-Regular.woff2',
];
resources2.map(function(f) {
  var path = f.split('/');
  var t = 'web/client/aot/style/fonts/icon/' + path[path.length-1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});

var resources3 = [
  'web/client/app/public/css/mycss/dist/fonts/roboto/Roboto-Medium.eot',
  'web/client/app/public/css/mycss/dist/fonts/roboto/Roboto-Medium.ttf',
  'web/client/app/public/css/mycss/dist/fonts/roboto/Roboto-Medium.woff',
  'web/client/app/public/css/mycss/dist/fonts/roboto/Roboto-Medium.woff2',
];
resources3.map(function(f) {
  var path = f.split('/');
  var t = 'web/client/aot/style/fonts/roboto/' + path[path.length-1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});
