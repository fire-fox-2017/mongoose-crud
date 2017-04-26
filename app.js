const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-crud')

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connection success');
});

var book = require('./routes/book')
var customer = require('./routes/customer')
var transaction = require('./routes/transaction')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',book);
app.use('/',customer);
app.use('/',transaction)

app.listen(3000)