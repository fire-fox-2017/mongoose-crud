const mongoose = require('mongoose')
const Schema = mongoose.Schema

let customerSchema = new Schema({
  name: { type: String },
  memberId: { type: String },
  address: { type: String },
  zipcode: { type: String },
  phone: { type: String }
})

let customers = mongoose.model('customers', customerSchema)

module.exports = customers
