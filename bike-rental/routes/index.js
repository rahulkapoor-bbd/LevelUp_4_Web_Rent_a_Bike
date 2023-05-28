const router = require('express').Router();
const userController = require('../controllers/userController');
const { getWeatherInfo } = require('../controllers/weatherController');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {


    const weatherInfoJ = await getWeatherInfo('Johannesburg');
    const weatherInfoC = await getWeatherInfo('Cape Town');
    const weatherInfoD = await getWeatherInfo('Durban');

    res.render('index', { weatherJ: weatherInfoJ, weatherC: weatherInfoC, weatherD: weatherInfoD });
  } catch (err) {
    next(err);
  }
  
  
});

module.exports = router;
