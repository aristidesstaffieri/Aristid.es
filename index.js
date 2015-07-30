import express from 'express'
import React from 'react'
import path from 'path'
let App = React.createFactory(require('../dist/components/app'))

const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/dist')))
app.set('views', path.join(__dirname, '/'))

app.get('/', function(req, res){
	let reactHtml = React.renderToString(App({}))
	res.render('index.ejs', {reactOutput: reactHtml})
})

const server = app.listen(80, function () {
	const host = server.address().address
	const port = server.address().port

	console.log('Blog is up at  http://%s:%s', host, port)
})

