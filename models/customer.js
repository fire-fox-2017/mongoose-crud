const mongoose = require('mongoose')
const Schema = mongoose.Schema

let customerSchema = new Schema({
    name: {
        type: String
    },
    memberid: {
        type: String
    },
    address: {
        type: String
    },
    zipcode: {
        type: Number
    },
    phone: {
        type: String
    }
})

let Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
