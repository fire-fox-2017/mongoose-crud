var MongoClient = require('mongodb').MongoClient
const transaction = require('../models/transaction');

let controller = {}

//findall
// //,(err, users)=>{
//   if(err) throw err
//   res.send(users)
// }
controller.findall = (req,res,next)=>{
  transaction.find({})
  .populate('booklist memberid')
  .exec((err, user)=>{
    if(err) throw err
    res.send(user)
  })
}

//findone
controller.findone = (req,res,next)=>{
  transaction.find({
    _id : ObjectId(req.params.id)
  }, (err, user)=>{
    if(err) throw err
    res.send(user)
  })
}


//create
controller.create = (req, res, next)=>{
  var data = transaction ({
    memberid : req.body.memberid,
    days : req.body.days,
    out_date : new Date(),
    due_date : new Date(),
    in_date : new Date(),
    fine : req.body.fine,
    booklist : req.body.booklist
  })

  data.save((err, result)=>{
    if(err) throw err
    res.send('User saved successfully!');
  })
}

//delete
controller.delete =  (req,res,next)=>{
  transaction.findOneAndRemove({
    _id : ObjectId(req.params.id)
  }, (err)=>{
    if(err) throw err
    res.send('User Delete!')
  })
}

//update
controller.update = (req,res,next)=>{
  transaction.findOneAndUpdate({
    _id: ObjectId(req.params.id)
  }, {
    memberid : req.body.memberid,
    days : req.body.days,
    out_date : new Date(),
    due_date : new Date(),
    in_date : new Date(),
    fine : req.body.fine,
    booklist : req.body.booklist
  },(err, user)=>{
  if (err) throw err;
  res.send('Update Successfully')
});
}

module.exports = controller;