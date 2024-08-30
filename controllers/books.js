const Book = require('../model/books');

exports.getBooks = (req, res) => {
    Book.findAll()
    .then(books => {
        res.render('home/data', {
            books: books,
            path: '/books'
        })
    })
    .catch(err => {
        console.log(err);
    })
}

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
