const mongoose = require('mongoose');
var Schema = mongoose.Schema

const transactionSchema = new Schema({
  memberid: String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date : Date,
  fine : Number,
  booklist : [
  { type: Schema.Types.ObjectId, ref: 'Book' },
  { type: Schema.Types.ObjectId, ref: 'Customer' }]
})

let transactions = mongoose.model('Transaction', transactionSchema)

module.exports = transactions;