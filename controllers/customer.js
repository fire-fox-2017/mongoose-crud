const mongo = require('mongodb');
const Customer = require('../models/customer');
let methods = {};

methods.insertOne = (req, res) => {
  Customer.create(req.body)
  .then(customer => {
    res.json(customer);
  })
  .catch(err => {
    res.json({message: 'Error insert customer'});
  })
}

methods.getAll = (req, res) => {
  Customer.find()
  .then(customers => {
    res.json(customers);
  })
  .catch(err => {
    res.json({message: 'Error find all customers'});
  })
}

methods.getById = (req, res) => {
  Customer.findById(req.params.id)
  .then(customer => {
    res.json(customer);
  })
  .catch(err => {
    res.json({message: 'Error find customer by id'});
  })
}

methods.updateById = (req, res) => {
  Customer.findById(req.params.id)
  .then(customer => {
    customer.name = req.body.name || customer.name;
    customer.memberid = req.body.memberid || customer.memberid;
    customer.address = req.body.address || customer.address;
    customer.zipcode = req.body.zipcode || customer.zipcode;
    customer.phone = req.body.phone || customer.phone;
    customer.save()
    .then(customer_ => {
      res.json(customer_);
    })
    .catch(err_ => {
      res.status(500).send(err);
    })
  })
  .catch(err => {
    res.json({message: 'Error update customer by id'})
  })
}

methods.deleteById = (req, res) => {
  Customer.findById(req.params.id)
  .then(customer => {
    customer.remove()
    .then(customer_ => {
      res.json({message: `Customer with id ${customer_.id} has been deleted`});
    })
    .catch(err_ => {
      res.status(500).send(err);
    })
  })
  .catch(err => {
    res.json({message: 'Error delete customer by id'})
  })
}

module.exports = methods;
