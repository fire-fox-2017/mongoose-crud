var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var transactionSchema = new Schema({
  memberid: String,
  days: Number,
  out_date: {
    type: Date,
    default: new Date().toISOString()
  },
  due_date: {
    type: Date,
    default: new Date().toISOString()
  },
  in_date: {
    type: Date,
    default: new Date().toISOString()
  },
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
});
var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
