const express = require('express')
const path = require('path')
const app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.render('index')
})
app.get('/arduino', (req, res) => {
  let l = req.query.l || "no hay luz bro";
  let t = req.query.t || "no hay temp"
  let h = req.query.h || "no hay humedad joven"
  res.json({
    'l': l,
    't': t,
    'h': h
  })
})

app.use(function (req, res, next) {
  //next(createError(404));
  res.status(404);
  res.render('404', { title: '404 - Not Found' });
  return;
});

app.listen(process.env.PORT || '3000')