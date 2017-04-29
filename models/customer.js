const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let custSchema = new Schema({
  member_id: String,
  name: String,
  address: String,
  zipcode: String,
  phone: String
});

let Customer = mongoose.model('Customer', custSchema);

module.exports = Customer;
