var Customer = require("../models/customer");

exports.create = (req, res, next) => {
  var newCustomer = Customer({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  });

  newCustomer.save( (err, customer) => {
    if (err) res.send(err);

    res.send(customer);
  })

}

exports.get_customers = (req, res, next) => {
  Customer.find( (err, customers) => {
    if (err) res.send(err);
    res.send(customers);
  })
}

exports.get_customer = (req, res, next) => {
  Customer.find({_id: req.params.id}, (err, customer) => {
    if (err) res.send(err);
    res.send(customer);
  })
}

exports.delete = (req, res, next) => {
  Customer.findByIdAndRemove( req.params.id, (err, customer) => {
    var message = {
      message: "Customer has been deleted successfully.",
      id: customer._id
    };
    res.send(message);
  })
}

exports.update = (req, res, next) => {
  Customer.findById(req.params.id, (err, customer) => {
    if (err) res.send(err);

    customer.name = req.body.name || customer.name;
    customer.memberid = req.body.memberid || customer.memberid;
    customer.address = req.body.address || customer.address;
    customer.zipcode = req.body.zipcode || customer.zipcode;
    customer.phone = req.body.phone || customer.phone;

    // after updating the attributes, we need to save it
    customer.save( (err, customer) => {
      if (err) res.send(err);

      res.send(customer);
    })

  })}
