var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');


/* GET users listing. */

let selectedUser = {
  userId : 1,
  firstName : "John",
  lastName : "BOSS",
  emailAddress : "John@BOSS.co.za"
}

router.get('/', function(req, res, next) {
  res.render('user', { user: selectedUser });
});

module.exports = router;
