const router = require('express').Router();


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
