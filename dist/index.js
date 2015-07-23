'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var app = (0, _express2['default'])();

app.get('/', function (req, res) {
  res.send('Yo!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Blog is up at  http://%s:%s', host, port);
});