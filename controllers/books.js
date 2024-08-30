const Book = require('../model/books');

const Returned = require('../model/returned-books')

exports.getBooks = (req, res) => {
  // Fetch both books and returnedBooks simultaneously
  Promise.all([
      Book.findAll(),
      Returned.findAll()
  ])
  .then(([books, returnedBooks]) => {
      res.render('home/data', {
          books: books,
          returnedBooks: returnedBooks,
          path: '/books'
      });
  })
  .catch(err => {
      console.log(err);
  });
};


exports.getAddBooks = (req, res, next) => {
    res.render('home/form', {
        path: '/books',
        editing: false
    });
};

exports.postAddBooks = (req, res, next) => {
    const title = req.body.title;
    const student = req.body.student;
    const studId = req.body.studentId;
  
    Book.create({ 
      title: title,
      student: student, 
      studentId: studId 
    })
    .then(result => {
      res.redirect('/books');
    })
    .catch(err => {
      console.log(err);
    });
  };
