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
					return (<li key={article.id}>
						<Link to="article" params={{id: article.id}}>
							<h1 style={styles.postTitle} className="article-title">{article.title}</h1>
						</Link>
						<h4 style={styles.postDate}>August, 21st, 2015</h4>
					</li>)
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
	},
	postDate: {
		fontSize: '0.8em',
		color: '#a3a3a3',
		fontStyle: 'italic',
		fontFamily: 'Helvetica',
		fontWeight: 100,
		marginTop: '-25px',

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