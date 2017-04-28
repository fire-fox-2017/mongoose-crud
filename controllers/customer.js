const Customer = require('../models/customer.js');

let custControl = {
  showAll: (req, res) => {
    Customer.find({}, (err, customers) => {
      if (err) {
        res.send(err);
      } else {
        res.send(customers);
      }
    });
  },
  add: (req, res) => {
    let member_id = req.body.member_id;
    let name = req.body.name;
    let address = req.body.address;
    let zipcode = req.body.zipcode;
    let phone = req.body.phone;
    if (member_id && name && address && zipcode && phone) {
      let customer = new Customer({
        member_id: member_id,
        name: name,
        address: address,
        zipcode: zipcode,
        phone: phone
      });
      customer.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({message: 'Customer is successfully added to database', customer:customer});
        }
      });
    } else {
      res.send('member_id, name, address, zipcode, and phone must not be empty');
    }
  },
  showOne: (req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
      if (err) {
        res.send(err);
      } else if (customer){
        res.send(customer);
      } else {
        res.send('Customer "_Id" is not found');
      }
    });
  },
  update: (req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
      if (err) {
        res.send(err);
      } else {
        let member_id = req.body.member_id || customer.member_id;
        let name = req.body.name || customer.name;
        let address = req.body.address || customer.address;
        let zipcode = req.body.zipcode || customer.zipcode;
        let phone = req.body.phone || customer.phone;
        Customer.update({_id: req.params.id}, {$set:{
          member_id: member_id,
          name: name,
          address: address,
          zipcode: zipcode,
          phone: phone
        }}, (err, updated) => {
          if (err) {
            res.send(err);
          } else {
            res.send(updated);
          }
        });
      }
    });
  },
  delete: (req, res) => {
    Customer.findByIdAndRemove(req.params.id, (err, deleted) => {
      if(err) {
        res.send(err);
      } else {
        res.send(deleted);
      }
    });

  }
};


module.exports = custControl;
