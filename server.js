/* eslint-disable no-console, no-use-before-define */
require('babel/register')
import Express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.config'

import React from 'react'

import { getArticlesList, getArticle } from './src/utils/postsUtils'

const app = new Express()
const port = 3000

app.set('view engine', 'ejs')

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

const articles = getArticlesList()
console.log(articles)
app.get('/', function(req, res){
	res.render('index.ejs', { articles: JSON.stringify(articles) })
})

// CLIENT APP ROUTE
app.get('/bundle.js', function(req, res){
	res.send('/dist/bundle.js')
})

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
