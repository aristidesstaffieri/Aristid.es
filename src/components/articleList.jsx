import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

import Router from 'react-router'
const RouteHandler = Router.RouteHandler
const Link = Router.Link

class ArticleList extends Component{

	render() {
		return (
			<Link to="article" params={{id: 'test_article'}}><h1 style={styles.postTitle}>First Blog Post</h1></Link>
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

export default Radium(ArticleList)