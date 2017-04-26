const Book = require('../models/book')
const methods = {}

methods.insertOne = function( req, res ) {
  Book.create(req.body, function(error, record) {
    if(error) {
      res.json({ error })
    } else {
      res.json(record)
    }
  })
}

methods.getAll = function(req, res) {
  Book.find({}, function(error, records) {
    if(error) {
      rea.json({ error })
    } else {
      res.json(records)
    }
  })
}

methods.getById = function(req, res) {
  Book.findById( req.params.id, function(error, records) {
    if(error) {
      rea.json({ error })
    } else {
      res.json(records)
    }
  })
}

methods.updateById = function(req, res) {
  Book.findByIdAndUpdate( req.params.id, { $set: req.body },{ new : true } )
      .exec((error, record) => {
        if(error) {
          rea.json({ error })
        } else {
          res.json(record)
        }
      })
}

methods.deleteById = function(req, res) {
  Book.findByIdAndRemove( req.params.id )
      .exec((error, record) => {
        if(error) {
          rea.json({ error })
        } else {
          res.json(record)
        }
      })
}

module.exports = methods
