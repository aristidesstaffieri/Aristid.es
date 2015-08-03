'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsApp = require('/components/app');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var mountNode = document.getElementById('react-main-mount');

/**
* React entry point
*/
_react2['default'].render(new _componentsApp2['default']({}), mountNode);