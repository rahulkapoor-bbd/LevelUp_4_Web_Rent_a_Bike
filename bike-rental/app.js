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


const app = express();
app.use(express.json());

// allows us to parse the form data sent in request body (for our post method)
app.use(bodyParser.urlencoded({extended: true}));

// allow to server static files from this directory
app.use(express.static('public'));

app.get('/test', async (req, res) => {
  const msg = "API works";
  res.send(msg);
})

// // Session middleware
// app.use(
//   session({
//     secret: 'your_secret_key', // Change this to a random secret key
//     resave: false,
//     saveUninitialized: true
//   })
// );

// app.get('test', async (req, res) => {
//   const msg = "API works";
//   res.send("workjs");
// })
// // Middleware to check if the user is authenticated
// const requireAuth = (req, res, next) => {
//   if (req.session.isAuthenticated) {
//     next();
//   } else {
//     res.redirect('/login');
//   }
// };

// // view engine setup and pages
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use('/', authRouter);
// app.use('/login', authRouter); // Login route does not require authentication
// app.use('/', requireAuth, indexRouter); // Protect index route with authentication
// app.use('/user', requireAuth, usersRouter);
// app.use('/bikeRental', requireAuth, bikeRentalRouter);
// app.use('/bikeDetails', requireAuth, bikeDetailsRouter);
// app.use('/checkout', requireAuth, checkoutRouter);
// app.use('/admin', requireAuth, adminRouter);
// app.use('/health', healthRouter);

app.listen(3000,"0.0.0.0" , () => {
  console.log('Listening on '+ 3000);
});

module.exports = app;
