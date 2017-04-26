const Customer = require('../models/customer')
const methods = {}

methods.insertOne = function( req, res ) {
  Customer.create(req.body, function(error, record) {
    if(error) {
      res.json({ error })
    } else {
      res.json(record)
    }
  })
}

methods.getAll = function(req, res) {
  Customer.find({}, function(error, records) {
    if(error) {
      rea.json({ error })
    } else {
      res.json(records)
    }
  })
}

methods.getById = function(req, res) {
  Customer.findById( req.params.id, function(error, records) {
    if(error) {
      rea.json({ error })
    } else {
      res.json(records)
    }
  })
}

methods.updateById = function(req, res) {
  Customer.findByIdAndUpdate( req.params.id, { $set: req.body },{ new : true } )
      .exec((error, record) => {
        if(error) {
          rea.json({ error })
        } else {
          res.json(record)
        }
      })
}

methods.deleteById = function(req, res) {
  Customer.findByIdAndRemove( req.params.id )
      .exec((error, record) => {
        if(error) {
          rea.json({ error })
        } else {
          res.json(record)
        }
      })
}

module.exports = methods
