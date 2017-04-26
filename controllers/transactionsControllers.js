var Transaction = require('../models/transaction');
module.exports = {
  getall: (req, res, next) => {
    Transaction.find()
      .populate('booklist')
      .exec(function(err, result) {
        if (result) {
          res.json(result);
        } else {
          res.send(`ERR getall :\n ${err}`);
        }
      });
  },
  create: (req, res, next) => {
    Transaction.create(req.body, function(error, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(`ERR input :\n ${error}`);
      }
    });
  },
  delete: (req, res, next) => {
    let id = req.params.id;
    Transaction.remove({
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
    Transaction.findOne({
      _id: id
    }).exec(function(err, result) {
      if (result) {
        Transaction.update({
          _id: id
        }, {
          $set: {
            memberid: req.body.memberid || result.memberid,
            days: req.body.days || result.days,
            out_date: req.body.out_date || result.out_date,
            due_date: req.body.due_date || result.due_date,
            in_date: req.body.in_date || result.in_date,
            fine: req.body.fine || result.fine,
            booklist: req.body.booklist || result.booklist
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
