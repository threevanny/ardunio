const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/arduino', (req, res) => {
  let q = req.query.q;
  res.send('arduino dice', q)
})


app.use(function (req, res, next) {
  //next(createError(404));
  res.status(404);
  res.render('404', { title: '404 - Not Found' });
  return;
});

app.listen(process.env.PORT || '3000')