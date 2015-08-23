import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

import Router from 'react-router'
const RouteHandler = Router.RouteHandler

class ArticleList extends Component{

	render() {
		return (
			<a href="#"><h1 style={styles.postTitle}>First Blog Post</h1></a>
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