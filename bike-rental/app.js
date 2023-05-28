const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const bikeRentalRouter = require('./routes/bikeRental');
const bikeDetailsRouter = require('./routes/bikeDetails');
const authRouter = require('./routes/userAuth');
const checkoutRouter = require('./routes/checkout');
const adminRouter = require('./routes/admin');
const healthRouter = require('./routes/health');
const newBikeRental = require('./routes/newBikeRental');

const app = express();
app.use(express.json());

// allows us to parse the form data sent in request body (for our post method)
app.use(bodyParser.urlencoded({extended: true}));

// allow to server static files from this directory
app.use(express.static('public'));



app.use('/newBikeRental', newBikeRental);

// view engine setup and pages
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', authRouter);

app.use('/', indexRouter); // Protect index route with authentication
app.use('/user', usersRouter);
app.use('/bikeRental', bikeRentalRouter);
app.use('/bikeDetails', bikeDetailsRouter);
app.use('/checkout',  checkoutRouter);
app.use('/admin',  adminRouter);
app.use('/health', healthRouter);

app.listen(3000,"0.0.0.0" , () => {
  console.log('Listening on '+ 3000);
});

module.exports = app;
