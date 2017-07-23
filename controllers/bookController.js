var mongo = require('mongodb')
var Book = require('../models/book')
var methods = {}

methods.insertOne = (req, res, next) => {
    Book.create(req.body)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu insert Book'
            })
        })
} // insertOne

methods.getAll = (req, res, next) => {
    Book.find()
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getAll Book'
            })
        })
} //getAll

methods.getById = (req, res, next) => {
    Book.findById(req.params.id)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getById Book'
            })
        })
} // getById

methods.updateById = (req, res, next) => {
    Book.findById(req.params.id)
        .then(record => {
            Book.updateOne({
                    "_id": new mongo.ObjectID(req.params.id)
                }, {
                    $set: {
                        "isbn": req.body.isbn || record.isbn,
                        "title": req.body.title || record.title,
                        "author": req.body.author || record.author,
                        "category": req.body.category || record.category,
                        "stock": req.body.stock || record.stock
                    }
                })
                .then((record) => {
                    res.json(record)
                })
                .catch(err => {
                    res.json({
                        err,
                        message: 'Error waktu update Book'
                    })
                })
        })
        .catch(err => {
            res.json({
                err,
                message: 'Data tidak ada'
            })
        })
} //updateById

methods.deleteById = (req, res, next) => {
    Book.deleteOne({
            "_id": new mongo.ObjectID(req.params.id)
        })
        .then((record) => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu deleteById Book'
            })
        })
} // deleteById

module.exports = methods