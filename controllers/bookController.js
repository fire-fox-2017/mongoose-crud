
var method = {}
var Book = require("../models/books");

method.getAllBook = (req, res, next) => {
    Book.find(function(err, books) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send(books);
        }
    });
}

method.insertBook = (req, res, next) => {
    var book = new Book(req.body);
    book.save(function(err, createdObject) {
        if (err) {
            res.send(err);
        }
        res.send(createdObject);
    });
}

method.updateBook = (req, res, next) => {
    Book.findById(req.params.id, function(err, book) {
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {

            book.isbn = req.body.isbn || book.isbn;
            book.title = req.body.title || book.title;
            book.author = req.body.author || book.author;
            book.category = req.body.category || book.category;
            book.stock = req.body.stock || book.stock;


            book.save(function(err, book) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send(book);
            });
        }
    });
}

method.deleteBook = (req, res, next) => {
    Book.findByIdAndRemove(req.params.id, function(err, book) {
        var response = {
            message: "Book successfully deleted",
            id: book._id
        };
        res.send(response);
    });

}


module.exports = method;
