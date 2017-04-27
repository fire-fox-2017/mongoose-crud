const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// set
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: false}));

// route
const books = require('./routes/books');

// use the route
app.use('/api/books', books);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(app.get('port'), () => {
  console.log(`app listening on ${app.get('port')}`);
})

module.exports = app;