var method = {}
var Transaction = require("../models/transactions");

method.getAllTransaction = (req, res, next) => {
  Transaction.find()
  .populate('booklist')
  .exec((err,result)=>{
    if(result){
      res.json(result)
    }else{
      res.send(`ERR getall :\n ${err}`)
    }
  })
}

method.insertTransaction = (req, res, next) => {
    var transaction = new Transaction(req.body);
    transaction.save(function(err, createdObject) {
        if (err) {
            res.send(err);
        }
        res.send(createdObject);
    });
}

method.updateTransaction = (req, res, next) => {
    Transaction.findById(req.params.id, function(err, transaction) {
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {

          transaction.memberid = req.body.memberid || transaction.memberid;
          transaction.days = req.body.days || transaction.days;
          transaction.out_date = req.body.out_date||transaction.out_date
          transaction.due_date = req.body.due_date||transaction.due_date
          transaction.in_date =req.body.in_date || transaction.in_date
          transaction.fine = req.body.fine || transaction.fine;
          transaction.booklist = req.body.booklist || transaction.booklist;


            transaction.save(function(err, transaction) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send(transaction);
            });
        }
    });
}

method.deleteTransaction = (req, res, next) => {
    Transaction.findByIdAndRemove(req.params.id, function(err, transaction) {
        var response = {
            message: "transaction successfully deleted",
            id: transaction._id
        };
        res.send(response);
    });

}


module.exports = method;
