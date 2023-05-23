const router = require('express').Router();
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const user = req.session.user;
    const adminResults = await userController.getAdminID();
    const adminId = adminResults[0].userId;
    let isAdmin = false

    if (user.userId == adminId) {
      isAdmin = true
    }else {
      isAdmin = false
    }
    
    console.log(user.userId);
    console.log(adminId);

    res.render('index', { data: isAdmin });
  } catch (err) {
    next(err);
  }
  
  
});

module.exports = router;
