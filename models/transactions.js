var mongoose = require('mongoose');
var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId;

var transactionSchema = new Schema({
    memberid : String,
    days : Number,
    out_date : {
      type : Date,
      default :new Date().toISOString()
    },
    due_date : {
      type : Date,
      default :new Date().toISOString()
    },
    in_date : {
      type : Date,
      default :new Date().toISOString()
    },
    fine : Number,
    booklist : [{ type: Schema.Types.ObjectId, ref: 'books' }]
});

var Transactions = mongoose.model('transactions', transactionSchema);

module.exports = Transactions;
