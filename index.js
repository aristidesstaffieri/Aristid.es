import express from 'express'
import React from 'react'
let App = React.createFactory(require('../dist/components/app'))

const app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/dist'))
app.set('views', __dirname + '/')

app.get('/', function(req, res){
    var reactHtml = React.renderToString(App({}))
    res.render('index.ejs', {reactOutput: reactHtml})
})

const server = app.listen(80, function () {
	const host = server.address().address
	const port = server.address().port

	console.log('Blog is up at  http://%s:%s', host, port)
})

