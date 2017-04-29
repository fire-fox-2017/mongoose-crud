const Transaction = require('../models/transaction.js');
let finePerBookDay = 500;

let transControl = {
  showAll: (req, res) => {
    Transaction.find({}).populate('booklist').exec((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },
  add: (req, res) => {
    let member_id = req.body.member_id;
    let out_date = new Date(req.body.out_date);
    let due_date = new Date(req.body.due_date);
    let in_date = new Date(req.body.in_date);
    let booklist = req.body.booklist;
    let days = (in_date - due_date)/(24*60*60*1000);
    if (days < 0) {
      days = 0;
    }
    let fine = booklist.length*days*finePerBookDay;
    if (member_id && out_date && due_date && in_date && booklist) {
      let transaction = new Transaction({
        member_id: member_id,
        days: days,
        out_date: out_date,
        due_date: due_date,
        in_date: in_date,
        fine: fine,
        booklist: booklist
      });
      transaction.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({message: 'Transaction is successfully added to database', transaction:transaction});
        }
      });


    } else {
      res.send('member_id, days, out_date, due_date, in_date, and booklist must not be empty');
    }
  },
  showOne: (req, res) => {
    Transaction.findById(req.params.id).populate('booklist').exec((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },
  update: (req, res) => {
    Transaction.findById(req.params.id, (err, transaction) => {
      if (err) {
        res.send(err);
      } else {
        let member_id = req.body.member_id || transaction.member_id;
        let out_date = new Date(req.body.out_date || transaction.out_date);
        let due_date = new Date(req.body.due_date || transaction.due_date);
        let in_date = new Date(req.body.in_date || transaction.in_date);
        let booklist = req.body.booklist || transaction.booklist;
        let days = (in_date - due_date)/(24*60*60*1000);
        if (days < 0) {
          days = 0;
        }
        let fine = booklist.length*days*finePerBookDay;
        Transaction.update({_id: req.params.id}, {$set:{
          member_id: member_id,
          days: days,
          out_date: out_date,
          due_date: due_date,
          in_date: in_date,
          fine: fine,
          booklist: booklist
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
    Transaction.findByIdAndRemove(req.params.id, (err, deleted) => {
      if(err) {
        res.send(err);
      } else {
        res.send(deleted);
      }
    });
  }
};

module.exports = transControl;
