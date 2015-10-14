import Remarkable from 'remarkable'
import fs from 'fs'
const md = new Remarkable()

//SERVER SIDE UTIL
export function getArticle(articleId) {
  let article = fs.readFileSync(`./posts/${articleId}.md`, { encoding: 'utf8' })
  return {
  	id: articleId,
  	content: md.render(article)
  }
}

export function getArticlesList() {
  let articles = fs.readdirSync('./posts/')
  let list = []

	articles.forEach((article) => {
		list.push({
			id: article.replace('.md', ''),
			title: formatTitle(article.replace('.md', ''))
		})
	})
	return list
}

function formatTitle(article) {
	let articleTitle = article.replace('_', ' ')
	return articleTitle.replace(/\w\S*/g,
		function(txt){
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
		})
}
