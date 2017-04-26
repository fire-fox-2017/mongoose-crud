var Transaction = require('../models')
var methods = {}

methods.insertOne = (req, res, next) => {
    Transaction.create(req.body)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu insert Customer'
            })
        })
}

methods.getAll = (req, res, next) => {
    Transaction.findAll()
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getAll Customer'
            })
        })
}

methods.getById = (req, res, next) => {
    Transaction.findById(req.params.id)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getById Customer'
            })
        })
}

methods.updateById = (req, res, next) => {
    Transaction.update(req.body, {
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
                message: 'Error waktu updateById Customer'
            })
        })
} //updateById

methods.deleteById = (req, res, next) => {
    Transaction.destroy({
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
                message: 'Error waktu deleteById Customer'
            })
        })
}

module.exports = methods