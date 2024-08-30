const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const returnedBooks = require('./model/returned-books');
const Books = require('./model/books')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

const booksRoutes = require('./routes/books');
const returnedRoutes = require('./routes/returned-books');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(booksRoutes);
app.use(returnedRoutes);
app.use(errorController.get404);

const port = 2340;

sequelize
.sync()
// .sync({force : true})
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}/books
            `);
    });
})
.catch(err => {
    console.log(err);
});

