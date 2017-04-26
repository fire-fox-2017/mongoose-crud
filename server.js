const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library')

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connection success');
});

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/books', require('./routes/books'));
app.use('/transactions', require('./routes/transactions'));
app.use('/customers', require('./routes/customers'));

app.listen(app.get('port'), function(){
  console.log('listening on port '+app.get('port'))
})
