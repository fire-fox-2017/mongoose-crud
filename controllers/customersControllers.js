var Customer = require('../models/customer');
module.exports = {
  getall: (req, res, next) => {
    Customer.find().exec(function(err, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(`ERR getall :\n ${err}`);
      }
    });
  },
  create: (req, res, next) => {
    Customer.create({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    }, function(error, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(`ERR input :\n ${error}`);
      }
    });
  },
  delete: (req, res, next) => {
    let id = req.params.id;
    Customer.remove({
      _id: id
    }, function(err) {
      if (!err) {
        res.send(`Success remove with id ${id}`);
      } else {
        res.send(`ERR input :\n ${error}`);
      }
    });
  },
  update: (req, res, next) => {
    let id = req.params.id;
    Customer.findOne({
      _id: id
    }).exec(function(err, result) {
      if (result) {
        Customer.update({
          _id: id
        }, {
          $set: {
            name: req.body.name || result.name,
            memberid: req.body.memberid || result.memberid,
            address: req.body.req.body.address || result.address,
            zipcode: req.body.zipcode || result.zipcode,
            phone: req.body.phone || result.phone
          }
        }, function(err, result) {
          if (result) {
            res.json(result);
          } else {
            res.send(`ERR Update :\n ${err}`);
          }
        });
      } else {
        res.send(`ERR getall :\n ${err}`);
      }
    });
  }
}
