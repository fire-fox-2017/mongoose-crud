// var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongoose').Types.ObjectId;
const customer = require('../models/customers');

let controller = {}

//findall
controller.findall = (req,res,next)=>{
  customer.find({},(err, users)=>{
    if(err) throw err
    res.send(users)
  })
}

//findone
controller.findone = (req,res,next)=>{
  customer.find({
    _id : ObjectId(req.params.id)
  }, (err, user)=>{
    if(err) throw err
    res.send(user)
  })
}


//create
controller.create = (req, res, next)=>{
  var data = customer ({
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    stock : req.body.stock
  })

  data.save((err, result)=>{
    if(err) throw err
    res.send('User saved successfully!');
  })
}

//delete
controller.delete =  (req,res,next)=>{
  customer.findOneAndRemove({
    _id : ObjectId(req.params.id)
  }, (err)=>{
    if(err) throw err
    res.send('User Delete!')
  })
}

//update
controller.update = (req,res,next)=>{
  customer.findOneAndUpdate({
    _id: ObjectId(req.params.id)
  }, {
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    stock: req.body.stock,
  },(err, user)=>{
  if (err) throw err;
  res.send('Update Successfully')
});
}

module.exports = controller;