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
}

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
}

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
}

methods.updateById = (req, res, next) => {
    Book.updateOne({
            "_id": new mongo.ObjectID(req.params.id)
        }, {
            $set: {
                "isbn": req.body.isbn,
                "title": req.body.title,
                "author": req.body.author,
                "category": req.body.category,
                "stock": req.body.stock
            }
        })
        .then((record) => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu updateById Book'
            })
        })
} //updateById

methods.deleteById = (req, res, next) => {
    Book.destroy({
            where: {
                id: req.params.id
            }
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
}

module.exports = methods