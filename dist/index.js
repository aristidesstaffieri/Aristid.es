'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var app = (0, _express2['default'])();

app.set('view engine', 'ejs');
app.use(_express2['default']['static'](_path2['default'].join(__dirname, '/dist')));
app.set('views', _path2['default'].join(__dirname, '/'));

// ROUTES
app.get('/', function (req, res) {
	_reactRouter2['default'].run(_routes2['default'], req.path, function (Handler) {
		var reactHtml = _react2['default'].renderToString(_react2['default'].createElement(Handler));
		res.render('index.ejs', { reactOutput: reactHtml });
	});
});

app.get('/articles/:id', function (req, res) {
	var aid = req.params.id;

	_reactRouter2['default'].run(_routes2['default'], '/articles/' + aid, function (Handler) {
		var reactHtml = _react2['default'].renderToString(_react2['default'].createElement(Handler));
		res.render('index.ejs', { reactOutput: reactHtml });
	});
});

var server = app.listen(80, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Blog is up at  http://%s:%s', host, port);
});