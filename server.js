/* eslint-disable no-console, no-use-before-define */
require('babel/register')
require('node-jsx').install({
    harmony: true,
    extension: '.jsx'
})
delete process.env.BROWSER;

import Express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.config'

import React from 'react'
import ReactDOM from 'react-dom/server'
import Container from './src/components/Container.jsx'
const App = React.createFactory(Container)

import { getArticlesList, getArticle } from './src/utils/postsUtils'

const app = new Express()
const port = 3000

app.set('view engine', 'ejs')

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

const articles = getArticlesList()

app.get('/', function(req, res){
	const markup = ReactDOM.renderToString(App({ articles: articles }))
	res.render('index.ejs', {
		markup: markup,
		articles: JSON.stringify(articles)
	})
})

// CLIENT APP ROUTE
app.get('/bundle.js', function(req, res){
	res.send('/dist/bundle.js')
})

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎🔨  Blog's at http://localhost:${port}/.`)
  }
})
