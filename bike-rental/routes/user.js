const userController = require('../controllers/userController');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    var emailAddress = req.query.emailAddress;

    const userInfo = await userController.getUserInfo(emailAddress);
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

    const userInfo = await userController.createNewUser(firstName, lastName, emailAddress);
    console.log(firstName,lastName,emailAddress);
    res.status(201).send({ message: `Successfully created user`});
  } catch (err) {
    next(err);
  }
});

router.delete('/', async (req, res, next) => {
  try { 
    var emailAddress = req.query.emailAddress;

    const userInfo = await userController.removeUser(emailAddress);
    res.status(201).send({ message: `Successfully updated user`});
  } catch (err) {
    next(err);
  }
});

router.put('/', async (req, res, next) => {
  try {
    var userId = req.body.userId;
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;    
    var emailAddress = req.body.emailAddress;

    const userInfo = await userController.updateUser(userId, firstName, lastName, emailAddress);
    res.status(201).send({ message: `Successfully updated user`});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
