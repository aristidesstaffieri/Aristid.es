import React from 'react'
import Router from 'react-router'
const Route = Router.Route
const DefaultRoute = Router.DefaultRoute

import ArticleList from './components/articleList'
import Article from './components/article'
import App from './components/app'

const routes = (
	<Route handler={App}>
		<DefaultRoute handler={ArticleList}/>
		<Route path="/" handler={ArticleList}/>
	</Route>
)

export default routes
