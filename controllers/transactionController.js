var Transaction = require("../models/transaction");

exports.create = (req, res, next) => {
  var newTransaction = Transaction({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,

  })
}
