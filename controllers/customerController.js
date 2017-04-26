const Customer = require('../models/customer');

var methode = {}

methode.findAll = (req, res)=>{
  Customer.find(function (err, query) {
  if (err) return console.error(err);
  res.send(query);
  })
}

methode.insert = (req, res) =>{
	  var CustomerInsert = new Customer(req.body);
	  CustomerInsert.save(function (err, query) {
		 if (err) {
		   res.send(err)
		 } else {
		   res.send(query)
		 }
	  });
}

methode.findById = (req, res) => {
	Customer.findOne({_id : req.params.id})
	.exec((err, query)=>{
		if (err) return console.error(err);
	  	res.send(query);
	})
}

methode.remove = (req, res) => {
	Customer.remove({_id : req.params.id})
	.exec((err, query)=>{
		if (err) return console.error(err);
	  	res.send("deleted");
	})
}

methode.edit = (req, res) =>{
	Customer.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true }, function (err, result) {
	if (err) return handleError(err);
	res.send(result);
	});
}

module.exports = methode