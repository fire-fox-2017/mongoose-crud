"use strict"

const express = require('express')
const mongoose = require('mongoose')
let app = express()

mongoose.connect('mongodb://localhost:27017/library_mongoose', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Mongodb connected");
  }
})

var books = require('./routes/books');
var customers = require('./routes/customers');
var transactions = require('./routes/transactions');


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/books', books);
app.use('/api/customers', customers);
app.use('/api/transactions', transactions);



app.listen(3000)
module.exports = app;