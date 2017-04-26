const Transaction = require('../models/transaction');

var methode = {}

methode.findAll = (req, res)=>{
  Transaction.find(function (err, query) {
  if (err) return console.error(err);
  res.send(query);
  })
}

methode.insert = (req, res) =>{
	  var TransactionInsert = new Transaction(req.body);
	  TransactionInsert.save(function (err, query) {
		 if (err) {
		   res.send(err)
		 } else {
		   res.send(query)
		 }
	  });
}

methode.findById = (req, res) => {
	Transaction.findOne({_id : req.params.id})
	.exec((err, query)=>{
		if (err) return console.error(err);
	  	res.send(query);
	})
}

methode.remove = (req, res) => {
	Transaction.remove({_id : req.params.id})
	.exec((err, query)=>{
		if (err) return console.error(err);
	  	res.send("deleted");
	})
}

methode.edit = (req, res) =>{
	Transaction.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true }, function (err, result) {
	if (err) return handleError(err);
	res.send(result);
	});
}

module.exports = methode