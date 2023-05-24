const router = require('express').Router();
const userController = require('../controllers/userController');
const { getWeatherInfo } = require('../controllers/weatherController');

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

    const weatherInfo = await getWeatherInfo('Johannesburg');
    
    console.log(user.userId);
    console.log(adminId);

    res.render('index', { data: isAdmin, weather: weatherInfo });
  } catch (err) {
    next(err);
  }
  
  
});

module.exports = router;
