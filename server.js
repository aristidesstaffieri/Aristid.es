/* eslint-disable no-console, no-use-before-define */
require('babel/register')
require('node-jsx').install({
    harmony: true,
    extension: '.jsx'
})
delete process.env.BROWSER;

import express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.config'

import React from 'react'
import ReactDOM from 'react-dom/server'
import Container from './src/components/Container.jsx'
const App = React.createFactory(Container)

import { getArticlesList, getArticle } from './src/utils/postsUtils'

const app = new express()
const port = 3000

app.set('view engine', 'ejs')
const router = express.Router()

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

const articles = getArticlesList()

router.get('/', (req, res) => {
  const markup = ReactDOM.renderToString(App({ articles: articles, isArticle: false }))
  res.render('index.ejs', {
    markup: markup,
    articles: JSON.stringify(articles)
  })
})

// CLIENT APP ROUTE
router.get('/bundle.js', (req, res) => {
	res.send('/dist/bundle.js')
})

router.get('/:post', (req, res) => {
  console.log('HERE', req.params)
  const article = getArticle(req.params.post)
  const markup = ReactDOM.renderToString(App({ articles: article.content, isArticle: true }))
  res.render('index.ejs', {
    markup: markup,
    articles: JSON.stringify(article.content)
  })
})

app.use('/', router)

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎🔨  Blog's at http://localhost:${port}/.`)
  }
})
