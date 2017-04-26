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
                console.log(records)
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

// methods.updateById = (req, res, next) => {
//     Transaction.findById(req.params.id)
//         .then(record => {
//             Transaction.updateOne({
//                     "_id": new mongo.ObjectID(req.params.id)
//                 }, {
//                     $set: {
//                         "name": req.body.name || record.name,
//                         "memberid": req.body.memberid || record.memberid,
//                         "address": req.body.address || record.address,
//                         "zipcode": req.body.zipcode || record.zipcode,
//                         "phone": req.body.phone || record.phone
//                     }
//                 })
//                 .then((record) => {
//                     res.json(record)
//                 })
//                 .catch(err => {
//                     res.json({
//                         err,
//                         message: 'Error waktu update Transaction'
//                     })
//                 })
//         })
//         .catch(err => {
//             res.json({
//                 err,
//                 message: 'Data tidak ada'
//             })
//         })
// } //updateById

methods.updateById = (req, res, next) => {
    Transaction.findByIdAndUpdate(req.params.id, {
            $set: {
                "name": req.body.name || record.name,
                "memberid": req.body.memberid || record.memberid,
                "address": req.body.address || record.address,
                "zipcode": req.body.zipcode || record.zipcode,
                "phone": req.body.phone || record.phone
            }
        }, {
            new: true // biar data yg ditampilkan data yg terupdate
        })
        .exec((err, record) => {
            if (err) {
                res.json({
                    err,
                    message: 'Error waktu updateById'
                })
            } else {
                res.json(record)
            }
        })
} //updateById

methods.deleteById = (req, res, next) => {
    Transaction.deleteOne({
            "_id": new mongo.ObjectID(req.params.id)
        })
        .then((record) => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu deleteById Transaction'
            })
        })
} // deleteById

module.exports = methods