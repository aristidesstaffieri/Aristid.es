'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _componentsArticleList = require('./components/articleList');

var _componentsArticleList2 = _interopRequireDefault(_componentsArticleList);

var _componentsArticle = require('./components/article');

var _componentsArticle2 = _interopRequireDefault(_componentsArticle);

var _componentsApp = require('./components/app');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var Route = _reactRouter2['default'].Route;
var DefaultRoute = _reactRouter2['default'].DefaultRoute;

var routes = _react2['default'].createElement(
	Route,
	{ handler: _componentsApp2['default'] },
	_react2['default'].createElement(DefaultRoute, { handler: _componentsArticleList2['default'] }),
	_react2['default'].createElement(Route, { path: '/', handler: _componentsArticleList2['default'] }),
	_react2['default'].createElement(Route, { name: 'article', path: '/articles/:id', handler: _componentsArticle2['default'] })
);

exports['default'] = routes;
module.exports = exports['default'];