const Transaction = require('../models/transaction');
const methods = {};

methods.add = (req, res, next) => {
  let booklistArr = req.body.booklist.split(',');
  Transaction.create({
    'memberid' : req.body.memberid,
    'days' : req.body.days,
    'out_date' : new Date(req.body.out_date),
    'due_date' : new Date(req.body.due_date),
    'in_date' : new Date(req.body.in_date),
    'fine' : req.body.fine,
    'booklist' : booklistArr
  }, (err, transaction) => {
    if(err) res.send(err)
    res.send(transaction);
  })
}

methods.gets = (req, res, next) => {
  Transaction
  .find()
  .populate('booklist',['title','isbn','author'])
  .exec(function(err, transactions) {
    if(err) res.send(err);
      res.send(transactions)
    }
  })
}

module.exports = methods;