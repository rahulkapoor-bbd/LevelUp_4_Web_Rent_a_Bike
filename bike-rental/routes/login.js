const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET login page
router.get('/', (req, res) => {
  res.render('login', { error: null, data: {firstname: "FIRST", lastname: "LAST", emailAddress: "EMAIL"}});
});

// POST login form
router.post('/', async (req, res) => {
  try {
    console.log("HERE!!!!");
    const { firstName, lastName, email } = req.body;
    console.log(firstName, lastName, email);
    const userInfo = await userController.getUserInfo(emailAddress);

    if (userInfo.length === 0) {
      // User does not exist, create a new user in the database
      await userController.createNewUser(firstName, lastName, email);
      // Redirect to the index page after successful registration

      req.session.userEmail = email;
      res.redirect('/');
    } else {
      const user = userInfo[0];
      res.redirect('/');
    }
  } catch (error) {
    // Handle the error
    res.render('login', { error: 'An error occurred' , data: {firstname: "FIRST", lastname: "LAST", emailAddress: "EMAIL"} });
  }
});

module.exports = router;