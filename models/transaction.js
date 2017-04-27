const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transactionSchema = new Schema({
    memberid: {
        type: String
    },
    days: {
        type: Number
    },
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
    fine: {
        type: Number
    },
    booklist: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
})

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
