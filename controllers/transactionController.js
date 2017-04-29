const Transaction = require('../models/transaction');
const methods = {}

methods.getAllTransaction = (req, res) => {
    // Transaction.find({}, (error, records) => {
    //     if (error) {
    //         res.json(error)
    //     } else {
    //         res.json(records)
    //     }
    // })
    Transaction.find({})
    .populate('booklist')
    .exec((error, records) => {
        if(error){
            res.json(error)
        } else {
            res.json(records)
            // console.log(records[0])
        }
    })
}

methods.getTransaction = (req, res) => {
    Transaction.find({_id:req.params.id})
    .populate('booklist')
    .exec((error, records) => {
        if(error){
            res.json(error)
        } else {
            res.json(records)
            // console.log(records[0])
        }
    })

    // Transaction.findById(req.params.id, (error, record) => {
    //     if (error) {
    //         res.json(error)
    //     } else {
    //         res.json(record)
    //     }
    // })
}

methods.insertTransaction = (req, res) => {
    Transaction.create(req.body, (error, record) => {
        if (error) {
            res.json(error)
        } else {
            res.json(record)
        }
    })
}

// update replace

methods.updateTransaction = (req, res) => {
    // console.log(req.params.id)
    Transaction.findById(req.params.id, (error, record) => {
        if (error) {
            res.json(error)
        } else {
            Transaction.update({
                _id: req.params.id
            }, {
                $set: {
                    memberid: req.body.memberid || record.memberid,
                    days: req.body.days || record.days,
                    out_date: req.body.out_date || record.out_date,
                    due_date: req.body.due_date || record.due_date,
                    in_date: req.body.in_date || record.in_date,
                    fine: req.body.fine || record.fine,
                    booklist: req.body.booklist || record.booklist
                }
            }, function(err, result) {
                res.json(result)
            });
        }
    })
}

methods.deleteTransaction = (req, res) => {
    Transaction.findByIdAndRemove(req.params.id, (error, record) => {
        if (error) {
            res.json(error)
        } else {
            res.json(record)
        }
    })
}

module.exports = methods
