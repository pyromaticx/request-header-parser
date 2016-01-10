var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  var clientInfo = {
    ip: req.ip,
    language: req.headers['accept-language'].slice(0,5),
    software: req.headers['user-agent']
  }
  console.log(clientInfo);
  res.send(JSON.stringify(clientInfo));
});

app.listen(port);
