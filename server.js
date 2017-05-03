const express = require('express');
const app = express();
const index = require('./router/index');
const api = require('./router/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose-crud');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', index);
app.use('/api', api);

app.listen(3000);
