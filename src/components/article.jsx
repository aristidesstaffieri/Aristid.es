import React, {PropTypes, Component} from 'react'
import Radium from 'radium'

import fs from 'fs'
import Remarkable from 'remarkable'
const md = new Remarkable()

class Article extends Component{

	getArticle(articleId) {
		let article = fs.readFileSync(`./articles/${articleId}.md`, {encoding: 'utf8'})
		return {
			id: articleId,
			content: md.render(article)
		}
	}

	render() {
		let article = this.getArticle('test_article')
		return (
			<div dangerouslySetInnerHTML={{__html: article.content}}>

			</div>
		)
	}
}

Article.displayName = 'Article'

export default Radium(Article)