var dbCustomer = require('../models/customer')

class Customer{
  static findCustomers(req, res){
    dbCustomer.find({}).then((customers)=>{
      res.send(customers)
    })
  }
  static addCustomer(req, res){
    var customer = new dbCustomer({
      name: req.body.name,
      memberid:  req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })
    customer.save(function (err, customer) {
      if (err) res.send(err)
      res.send(customer);
    })
  }
  static deleteCustomer(req,res){
    dbCustomer.remove({_id: req.body.id}, function (err, customer) {
      if (err) res.send(err)
      else{dbCustomer.find({}).then((customers)=>{
        res.send(customers)
      })}
    });
  }
  static updateCustomer(req, res){
    dbCustomer.update({_id: req.body.id},{$set:{name: req.body.name,
    memberid:  req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone}}, function (err, customer) {
  if (err) res.send(err);
  res.send(customer);
})
  }
}

module.exports = Customer