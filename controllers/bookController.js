const Book = require('../models/book');
const methods = {}

methods.getAllBook = (req, res) => {
    Book.find({}, (error, records) => {
        if (error) {
            res.json(error)
        } else {
            res.json(records)
        }
    })
}

methods.getBook = (req, res) => {
    Book.findById(req.params.id, (error, record) => {
        if (error) {
            res.json(error)
        } else {
            res.json(record)
        }
    })
}

methods.insertBook = (req, res) => {
    Book.create(req.body, (error, record) => {
        if (error) {
            res.json(error)
        } else {
            res.json(record)
        }
    })
}

methods.updateBook = (req, res) => {
    Book.findById(req.params.id, (error, record) => {
        if (error) {
            res.json(error)
        } else {
            Book.update({
                _id: req.params.id
            }, {
                $set: {
                    isbn: req.body.isbn || record.isbn,
                    title: req.body.title || record.title,
                    author: req.body.author || record.author,
                    category: req.body.category || record.category,
                    stock: req.body.stock || record.stock
                }
            }, function(err, result) {
                res.json(result)
            });
        }
    })
}

methods.deleteBook = (req, res) => {
    Book.findByIdAndRemove(req.params.id, (error, record) => {
        if (error) {
            res.json(error)
        } else {
            res.json(record)
        }
    })
}

module.exports = methods
