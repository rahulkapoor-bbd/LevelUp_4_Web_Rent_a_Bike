const userConstroller = require('../controllers/userController');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    var emailAddress = req.query.emailAddress;

    const userInfo = await userConstroller.getUserInfo(emailAddress);
    res.render('user', { data: userInfo });
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;    
    var emailAddress = req.body.emailAddress;

    const userInfo = await userConstroller.createNewUser(firstName, lastName, emailAddress);
    res.status(201).send({ message: `Successfully created user`});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
