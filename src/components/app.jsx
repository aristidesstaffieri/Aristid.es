import React, {PropTypes, Component} from 'react'
import Radium from 'radium'
import Nav from './navigation'
import Body from './body'

import fs from 'fs'
const FILES_DIR = './articles/'

class App extends Component{
	constructor(props) {
		super(props)
		this.state = {articles: this.serverGetArticles()}
	}

	serverGetArticles() {
		const articles = fs.readdirSync(FILES_DIR)
		let list = []

		articles.forEach((article) => {
			list.push({
				id: article.replace('.md', ''),
				title: this.formatTitle(article.replace('.md', '')),
				content: ''
			})
		})
		return list
	}

	formatTitle(article) {
		let articleTitle = article.replace('_', ' ')
		 return articleTitle.replace(/\w\S*/g, 
		 	function(txt){
		 		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
		 	})
	}

	render() {
		return (
			<div style={styles.container}>
				<Nav />
				<Body articles={this.state.articles}/>
			</div>
		)
	}
}

const styles = {
	container: {
		width: '100%',
		height: '100%',
	}
}

export default Radium(App)