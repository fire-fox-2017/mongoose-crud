var Customer = require('../models/customer')
var methods = {}

methods.insertOne = (req, res, next) => {
    Customer.create(req.body)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu insert Customer'
            })
        })
} // insertOne

methods.getAll = (req, res, next) => {
    Customer.find()
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getAll Customer'
            })
        })
} //getAll

methods.getById = (req, res, next) => {
    Customer.findById(req.params.id)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getById Customer'
            })
        })
} // getById

methods.updateById = (req, res, next) => {
    Customer.findById(req.params.id)
        .then(record => {
            Customer.updateOne({
                    "_id": new mongo.ObjectID(req.params.id)
                }, {
                    $set: {
                        "name": req.body.name || record.name,
                        "memberid": req.body.memberid || record.memberid,
                        "address": req.body.address || record.address,
                        "zipcode": req.body.zipcode || record.zipcode,
                        "phone": req.body.phone || record.phone
                    }
                })
                .then((record) => {
                    res.json(record)
                })
                .catch(err => {
                    res.json({
                        err,
                        message: 'Error waktu update Customer'
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
    Customer.deleteOne({
            "_id": new mongo.ObjectID(req.params.id)
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
} // deleteById

module.exports = methods