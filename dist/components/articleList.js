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

var RouteHandler = _reactRouter2['default'].RouteHandler;
var Link = _reactRouter2['default'].Link;

var ArticleList = (function (_Component) {
	_inherits(ArticleList, _Component);

	function ArticleList() {
		_classCallCheck(this, ArticleList);

		_get(Object.getPrototypeOf(ArticleList.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(ArticleList, [{
		key: 'render',
		value: function render() {
			var articles = this.props.articles;

			return _react2['default'].createElement(
				'ul',
				null,
				articles.map(function (article) {
					return _react2['default'].createElement(
						'li',
						{ key: article.id },
						_react2['default'].createElement(
							Link,
							{ to: 'article', params: { id: article.id } },
							_react2['default'].createElement(
								'h1',
								{ style: styles.postTitle, className: 'article-title' },
								article.title
							)
						),
						_react2['default'].createElement(
							'h4',
							{ style: styles.postDate },
							'August, 21st, 2015'
						)
					);
				})
			);
		}
	}]);

	return ArticleList;
})(_react.Component);

var styles = {
	postTitle: {
		fontFamily: 'Source Sans Pro',
		fontSize: '3em',
		color: '#272727'
	},
	postDate: {
		fontSize: '0.8em',
		color: '#a3a3a3',
		fontStyle: 'italic',
		fontFamily: 'Helvetica',
		fontWeight: 100,
		marginTop: '-25px'

	}
};

ArticleList.displayName = 'ArticleList';
ArticleList.PropTypes = {
	articles: _react.PropTypes.array
};
ArticleList.defaultProps = {
	articles: []
};

exports['default'] = (0, _radium2['default'])(ArticleList);
module.exports = exports['default'];
//# sourceMappingURL=../../maps/components/articleList.js.map