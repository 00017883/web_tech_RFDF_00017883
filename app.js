const express = require('express');
const path = require('path');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const petRoutes = require('./routes/pets');
const indexRoutes = require('./routes/index');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static files
app.use('/css', express.static(path.join(__dirname, 'public/styles')));
app.use('/js', express.static(path.join(__dirname, 'public/javascripts')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
//app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout', 'layout');

// routes
app.use('/', indexRoutes);
app.use('/pets', petRoutes);

//app.get('/', (req, res) => {
  //  res.render('index', {
    //    name: 'World',
      //  bio: 'This is a simple Express app.',
        //hobbies: ['Reading', 'Traveling', 'Coding'],
       // currentHour: new Date().getHours(),
//    })
//});

//const usersRouter = require('./routes/pets');
//app.use('/users', usersRouter);

//function logger(req, res, next) {
//    console.log(req.originalUrl)
//    next();
//}

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
