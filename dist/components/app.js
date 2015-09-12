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

var _navigation = require('./navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var FILES_DIR = './articles/';

var App = (function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
		this.state = { articles: this.serverGetArticles() };
	}

	_createClass(App, [{
		key: 'serverGetArticles',
		value: function serverGetArticles() {
			var _this = this;

			var articles = _fs2['default'].readdirSync(FILES_DIR);
			var list = [];

			articles.forEach(function (article) {
				list.push({
					id: article.replace('.md', ''),
					title: _this.formatTitle(article.replace('.md', '')),
					content: ''
				});
			});
			return list;
		}
	}, {
		key: 'formatTitle',
		value: function formatTitle(article) {
			var articleTitle = article.replace('_', ' ');
			return articleTitle.replace(/\w\S*/g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ style: styles.container },
				_react2['default'].createElement(_navigation2['default'], null),
				_react2['default'].createElement(_body2['default'], { articles: this.state.articles })
			);
		}
	}]);

	return App;
})(_react.Component);

var styles = {
	container: {
		width: '100%',
		height: '100%'
	}
};

exports['default'] = (0, _radium2['default'])(App);
module.exports = exports['default'];
//# sourceMappingURL=../../maps/components/app.js.map