'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsApp = require('/components/app');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var mountNode = document.getElementById('react-main-mount');

/**
* React entry point
*/
_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
	_react2['default'].render(_react2['default'].createElement(Handler, null), mountNode);
});