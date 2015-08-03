'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var App = _react2['default'].createFactory(require('../dist/components/app'));

var app = (0, _express2['default'])();

app.set('view engine', 'ejs');
app.use(_express2['default']['static'](_path2['default'].join(__dirname, '/dist')));
app.set('views', _path2['default'].join(__dirname, '/'));

app.get('/', function (req, res) {
	var reactHtml = _react2['default'].renderToString(App({}));
	res.render('index.ejs', { reactOutput: reactHtml });
});

var server = app.listen(80, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Blog is up at  http://%s:%s', host, port);
});