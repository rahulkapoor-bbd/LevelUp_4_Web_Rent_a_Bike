const router = require('express').Router();
const userController = require('../controllers/userController');
const { getWeatherInfo } = require('../controllers/weatherController');

/* GET home page. */
router.get('/index.html', async function(req, res, next) {
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

    const weatherInfoJ = await getWeatherInfo('Johannesburg');
    const weatherInfoC = await getWeatherInfo('Cape Town');
    const weatherInfoD = await getWeatherInfo('Durban');

    res.render('index', { data: isAdmin, weatherJ: weatherInfoJ, weatherC: weatherInfoC, weatherD: weatherInfoD });
  } catch (err) {
    next(err);
  }
  
  
});

module.exports = router;
