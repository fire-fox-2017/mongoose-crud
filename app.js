const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library')



app.set('port', process.env.PORT || 3000)


app.use(require('morgan')('dev'))
app.use(require('body-parser').urlencoded({ extended: false }))
app.use(require('body-parser').json())
app.use('/', require('./routes'))


app.listen(app.get('port'), function() {
  console.log('Listening on port' + app.get('port'));
})
