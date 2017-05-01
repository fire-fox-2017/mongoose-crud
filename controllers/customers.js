const Customer = require('../models/customer');
const methods = {};

methods.add = (req, res, next) => {
  Customer.create(req.body, (err, customer) => {
    if(err) res.send(err)
    res.send(customer);
  });
}

methods.gets = (req, res, next) => {
  Customer.find({}, (err, customers) => {
    if (err) res.send(err)
    res.send(customers);
  });
}

methods.findByName = (req, res, next) => {
  Customer.find({ name: req.body.name }, (err, customer) => {
    if(err) res.send(err)
    res.send(customer)
  });
}

methods.edit = (req, res, next) => {
  Customer.findOneAndUpdate({ name: req.params.name }, { $set: req.body }, (err, done) => {
    if (err) res.send(err)
    res.send(`customer successfully edited`);
  });
}

methods.delete = (req, res, next) => {
  Customer.remove({ name: req.params.name }, (err, done) => {
    if (err) res.send(err)
    res.send(`customer successfully deleted`);
  });
}

module.exports = methods;