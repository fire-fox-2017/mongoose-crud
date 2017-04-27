var dbTransaction = require('../models/transaction')

class Transaction{
  static findTransactions(req, res){
    dbTransaction.find({})
    .populate('booklist')
    .exec(function(err, books){
      if(err){
        res.send(err)
      }
      res.send(books)
    })
  }
  static addTransaction(req, res){
    let bl = req.body.booklist.split(",")
    var transaction = new dbTransaction({
      memberid: req.body.memberid,
      days:  req.body.days,
      out_date: new Date(),
      due_date: new Date(),
      in_date: new Date(),
      fine: req.body.fine,
      booklist: bl
    })
    transaction.save(function (err, transaction) {
      if (err) res.send(err)
      res.send(transaction);
    })
  }
  static deleteTransaction(req,res){
    dbTransaction.remove({_id: req.body.id}, function (err, transaction) {
      if (err) res.send(err)
      else{dbTransaction.find({}).then((transactions)=>{
        res.send(transactions)
      })}
    });
  }
  static updateTransaction(req, res){
    let bl = req.body.booklist.split(",")
    dbTransaction.update({_id: req.body.id},{$set:{
      memberid: req.body.memberid,
      days:  req.body.days,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine: req.body.fine,
      booklist: bl
    }}, function (err, transaction) {
  if (err) res.send(err);
  res.send(transaction);
})
  }
}

module.exports = Transaction