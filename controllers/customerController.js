var method = {}
var Customer = require("../models/customers");

method.getAllCustomer = (req, res, next) => {
    Customer.find(function(err, customers) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send(customers);
        }
    });
}

method.insertCustomer = (req, res, next) => {
  console.log(req.body);
    var customer = new Customer(req.body);
    customer.save(function(err, createdObject) {
        if (err) {
            res.send(err);
        }
        res.send(createdObject);
    });
}

method.updateCustomer = (req, res, next) => {
    Customer.findById(req.params.id, function(err, customer) {
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {

            customer.name = req.body.name || customer.name;
            customer.memberid = req.body.memberid || customer.memberid;
            customer.address = req.body.address || customer.address;
            customer.zipcode = req.body.zipcode || customer.zipcode;
            customer.phone = req.body.phone || customer.phone;


            customer.save(function(err, customer) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send(customer);
            });
        }
    });
}

method.deleteCustomer = (req, res, next) => {
    Customer.findByIdAndRemove(req.params.id, function(err, customer) {
        var response = {
            message: "customer successfully deleted",
            id: customer._id
        };
        res.send(response);
    });

}


module.exports = method;
