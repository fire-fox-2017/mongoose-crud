const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transSchema = new Schema({
  member_id: String,
  days: String,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{type:Schema.Types.ObjectId, ref:'Book'}]
});

let Transaction = mongoose.model('Transaction', transSchema);

module.exports = Transaction;
