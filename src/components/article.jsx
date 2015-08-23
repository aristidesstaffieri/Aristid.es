import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

import Router from 'react-router'
const Link = Router.Link

class Article extends Component{

	render() {
		return (
			<h3>Test Article!</h3>
		)
	}
}

Article.displayName = 'Article'

export default Radium(Article)