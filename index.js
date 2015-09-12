require('babel/register')

import express from 'express'
import React from 'react'
import path from 'path'

import Router from 'react-router'
import routes from './routes'

import fs from 'fs'
const clientApp = fs.readFileSync('dist/browser.js', { encoding: 'utf8' })

const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/dist')))
app.set('views', path.join(__dirname, '/'))

// ROUTES
app.get('/', function(req, res){
	Router.run(routes, req.path, function(Handler) {
		const reactHtml = React.renderToString(React.createElement(Handler))
		res.render('index.ejs', {
			reactOutput: reactHtml
		})
	})
})

app.get('/articles/:id', function(req, res){
	let aid = req.params.id

	Router.run(routes, `/articles/${aid}`, function(Handler) {
		const reactHtml = React.renderToString(React.createElement(Handler))
		res.render('index.ejs', {
			reactOutput: reactHtml
		})
	})
})

// CLIENT APP ROUTE
app.get('/browser.js', function(req, res){
	res.send(clientApp)
})


const server = app.listen(80, function () {
	const host = server.address().address
	const port = server.address().port

	console.log('🌎  Blog is up at  http://%s:%s', host, port)
})

