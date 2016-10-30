var express = require('express');
var app = express();
var version = require('./version.json');

app.get('/', function (req, res) {
  res.send('Hello world from TopSwagCode! We are currently running version: ' + version.version);
});

app.listen(80, function () {
  console.log('Example app listening on port 80! Let it Begin :)');
});