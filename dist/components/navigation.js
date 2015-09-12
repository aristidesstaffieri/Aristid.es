'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var Link = _reactRouter2['default'].Link;

var Nav = (function (_Component) {
	_inherits(Nav, _Component);

	function Nav() {
		_classCallCheck(this, Nav);

		_get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Nav, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ style: styles.container },
				_react2['default'].createElement(
					'div',
					{ style: styles.titleContainer },
					_react2['default'].createElement(
						Link,
						{ to: 'home' },
						_react2['default'].createElement(
							'h1',
							{ style: styles.title },
							'Aristides'
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ style: styles.descContainer },
					_react2['default'].createElement(
						'h5',
						{ style: styles.desc },
						'A blog about the web.'
					),
					_react2['default'].createElement(
						'div',
						{ style: styles.connectContainer },
						_react2['default'].createElement(
							'a',
							{ href: '#', style: styles.iconLink, key: 'a' },
							_react2['default'].createElement('i', { style: styles.socialIcon, className: 'fa fa-twitter', key: '1' })
						),
						_react2['default'].createElement(
							'a',
							{ href: '#', style: styles.iconLink, key: 'b' },
							_react2['default'].createElement('i', { style: styles.socialIcon, className: 'fa fa-instagram', key: '2' })
						),
						_react2['default'].createElement(
							'a',
							{ href: '#', style: styles.iconLink, key: 'c' },
							_react2['default'].createElement('i', { style: styles.socialIcon, className: 'fa fa-medium', key: '3' })
						),
						_react2['default'].createElement(
							'a',
							{ href: '#', style: styles.iconLink, key: 'd' },
							_react2['default'].createElement('i', { style: styles.lastIcon, className: 'fa fa-envelope-o', key: '4' })
						)
					)
				)
			);
		}
	}]);

	return Nav;
})(_react.Component);

var styles = {
	container: {
		width: '20%',
		position: 'absolute',
		top: 0,
		bottom: 0,
		display: 'inline-block',
		background: '#272727'
	},
	title: {
		fontFamily: 'Dancing Script',
		color: '#fff',
		fontSize: '4vw',
		textShadow: '0px 2px 1px #4d4d4d'
	},
	titleContainer: {
		textAlign: 'center'
	},
	descContainer: {
		marginTop: '500px',
		textAlign: 'center'
	},
	desc: {
		fontFamily: 'Source Sans Pro',
		color: '#fff',
		fontSize: '1.3vw'
	},
	connectContainer: {
		textAlign: 'center',
		paddingLeft: '15%',
		paddingRight: '15%'
	},
	socialIcon: {
		color: '#fff',
		float: 'left',
		paddingRight: '20%'
	},
	lastIcon: {
		paddingRight: '0',
		color: '#fff',
		float: 'left'
	}
};

Nav.displayName = 'Navigation';

exports['default'] = (0, _radium2['default'])(Nav);
module.exports = exports['default'];