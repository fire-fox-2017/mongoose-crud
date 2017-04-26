const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bookSchema = new Schema({
    isbn: {
        type: String
    },
    title: {
        type: String
    },
    author: {
        type: String
    },
    category: {
        type: String
    },
    stock: {
        type: Number
    }
})

let Book = mongoose.model('Book', bookSchema)

module.exports = Book
