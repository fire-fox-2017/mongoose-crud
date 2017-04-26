const Book = require('../models/books')
const methods = {}

methods.insertOne = function(req, res){
  Book.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }, function(error, record){
    if(error){
      res.json({error})
    } else {
      res.json(record)
    }
  })
}

methods.getAll = function(req, res){
  Book.find({}, function(error, records){
    if(error){
      res.json({error})
    } else {
      res.json(records)
    }
  })
}

methods.updateById = function(req, res){
  Book.findByIdAndUpdate(req.params.id, { $set:req.body }, {new: true})
  .exec((error, record) => {
    if(error){
      res.json({error})
    } else {
      res.json(record)
    }
  })
}

methods.deleteById = function(req, res){
  Book.findByIdAndRemove(req.params.id)
  .exec((error, record) => {
    if(error){
      res.json({error})
    } else {
      res.json(record)
    }
  })
}

// methods.generateBooks = function(req, res){
//
//   Book.create({
//     isbn: req.body.isbn,
//     title: req.body.title,
//     author: faker.name.findName(),
//     category: req.body.category,
//     stock: req.body.stock
//   }, function(error, record){
//     if(error){
//       res.json({error})
//     } else {
//       res.json(record)
//     }
//   })
// }

module.exports = methods
