const Customer = require('../models/customer');
const methods = {}

methods.getAllCustomer = (req, res) => {
    Customer.find({}, (error, records) => {
        if (error) {
            res.json(error)
        } else {
            res.json(records)
        }
    })
}

methods.getCustomer = (req, res) => {
    Customer.findById(req.params.id, (error, record) => {
        if (error) {
            res.json(error)
        } else {
            res.json(record)
        }
    })
}

methods.insertCustomer = (req, res) => {
    Customer.create(req.body, (error, record) => {
        if (error) {
            res.json(error)
        } else {
            res.json(record)
        }
    })
}

methods.updateCustomer = (req, res) => {
    Customer.findById(req.params.id, (error, record) => {
        if (error) {
            res.json(error)
        } else {
            Customer.update({
                _id: req.params.id
            }, {
                $set: {
                    name: req.body.name || record.name,
                    memberid: req.body.memberid || record.memberid,
                    address: req.body.address || record.address,
                    zipcode: req.body.zipcode || record.zipcode,
                    phone: req.body.phone || record.phone
                }
            }, function(err, result) {
                res.json(result)
            });
        }
    })
}

methods.deleteCustomer = (req, res) => {
    Customer.findByIdAndRemove(req.params.id, (error, record) => {
        if (error) {
            res.json(error)
        } else {
            res.json(record)
        }
    })
}

module.exports = methods
