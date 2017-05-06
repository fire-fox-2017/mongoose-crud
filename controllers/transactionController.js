var ObjectId = require('mongodb').ObjectId
var Transaction = require('../models/transaction')
const methods = {}

//SHOW ALL TRANSACTION
methods.getAllTransactions = function(req,res){
  Transaction.find()
             .populate('booklist')
             .exec(function(err,Transaction){
              if(err){
                console.log(err);
              }
              else{
                res.send(Transaction)
              }
            })
}// SHOW ALL TRANSACTION

//INSERT TRANSACTION
methods.insertTransaction = function(req,res){
  var input = new Transaction({
    memberid:req.body.memberid,
    days:req.body.days,
    fine:req.body.fine,
    booklist:req.body.booklist
  })
  input.save(function(err, input){
    if(err){
      res.send(err)
    }
    else{
      res.send(input)
    }
  })
}//INSERT TRANSACTION

//UPDATE TRANSACTION
methods.updateTransaction = function(req,res){
  let update = {
    memberid:req.body.memberid,
    days:req.body.days,
    fine:req.body.fine,
    booklist:req.body.booklist
  }

  Transaction.findByIdAndUpdate(req.params.id, update, {new:true}, function(err, result){
    if(!err){
      res.send('berhasil update data')
    }else{
      res.send(err)
    }
  })
}//UPDATE TRANSACTION


//DELETE TRANSACTION
methods.deleteTransaction = function(req,res){
  Transaction.findByIdAndRemove(req.params.id,function(err, result){
    if(!err){
      res.send('berhasil hapus data')
    }else{
      res.send(err)
    }
  })
}//DELETE TRANSACTION


module.exports = methods