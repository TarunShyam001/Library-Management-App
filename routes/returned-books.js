const path = require('path');

const express = require('express');

const returnController = require('../controllers/returned-books');

const router = express.Router();

router.get('/books/return/:bookId', returnController.getAddReturnBooks);

router.post('/books/return/:bookId', returnController.postAddReturnBooks);

module.exports = router;
