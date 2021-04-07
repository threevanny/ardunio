const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/arduino', (req, res) => {
  let q = req.query.q;
  res.send('arduino dice', q)
})

app.listen(3000)