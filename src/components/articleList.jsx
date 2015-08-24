import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

import Router from 'react-router'
const RouteHandler = Router.RouteHandler
const Link = Router.Link

class ArticleList extends Component{

	render() {
		let {articles} = this.props
		return (
			<ul>
			{
				articles.map(function(article) {
					return (<li key={article.id}><Link to="article" params={{id: article.id}}><h1 style={styles.postTitle}>{article.title}</h1></Link></li>)
				})
			}
			</ul>
		)
	}
}

const styles = {
	postTitle: {
		fontFamily: 'Source Sans Pro',
		fontSize: '3em',
		color: '#272727',
	}
}

ArticleList.displayName = 'ArticleList'
ArticleList.PropTypes = {
	articles: PropTypes.array
}
ArticleList.defaultProps = {
	articles: []
}

export default Radium(ArticleList)