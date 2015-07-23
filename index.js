import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Yoo!');
})

const server = app.listen(80, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Blog is up at  http://%s:%s', host, port);
})
