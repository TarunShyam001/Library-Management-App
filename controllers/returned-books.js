const Book = require('../model/books');
const ReturnedBooks = require('../model/returned-books');

exports.getAddReturnBooks = (req, res, next) => {
    res.render('home/data', {
        path: '/books',
        editing: false
    });
};

exports.postAddReturnBooks = (req, res, next) => {
    const bookId = req.body.bookId;
    const fine = req.body.fineValue;
    const title = req.body.bookTitle;
    
    ReturnedBooks.create({ 
        title: title,
        fine: fine
    })
    .then(() => {
        return Book.findByPk(bookId);
    })
    .then(book => {
        return book.destroy();
    })
    .then(result => {
        res.redirect('/books');
    })
    .catch(err => {
      console.log(err);
    });
  };