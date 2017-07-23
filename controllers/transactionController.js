var mongo = require('mongodb')
var Transaction = require('../models/transaction')
var methods = {}

methods.insertOne = (req, res, next) => {
    Transaction.create(req.body)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu insert Transaction'
            })
        })
} // insertOne

methods.getAll = (req, res) => {
    Transaction.find({})
        .populate('booklist') // populate utk mendapatkan informasi semua property dicollection book
        .exec((err, records) => {
            if (err) {
                res.json({
                    err
                })
            } else {
                // console.log(records)
                res.json(records)
            }
        })
} //getAll

methods.getById = (req, res, next) => {
    Transaction.findById(req.params.id)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getById Transaction'
            })
        })
} // getById

methods.updateById = (req, res, next) => {
    Transaction.findById(req.params.id)
        .then(record => {
            Transaction.updateOne({
                    "_id": new mongo.ObjectID(req.params.id)
                }, {
                    $set: {
                        "memberid": req.body.memberid || record.memberid,
                        "days": req.body.days || record.days,
                        "fine": req.body.fine || record.fine,
                        "booklist": req.body.booklist || record.booklist
                    }
                })
                .then((record) => {
                    res.json(record)
                })
                .catch(err => {
                    res.json({
                        err,
                        message: 'Error waktu update Transaction'
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
    Transaction.findByIdAndRemove(req.params.id)
        .exec((err, record) => {
            if (err) {
                res.json({
                    err,
                    message: 'Error waktu deleteById'
                })
            } else {
                res.json(record)
            }
        })
}

module.exports = methods