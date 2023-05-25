const router = require('express').Router();
const adminController = require('../controllers/adminController');

  router.get('/', async (req, res, next) => {
    try {
      res.render('admin'); 
    } catch (err) {
      next(err); 
    }
  });


  router.post('/', async (req, res, next) => {
    try {
      const bikeType = Number.parseFloat(req.body.bikeType); 
      const dailyRate = Number.parseFloat(req.body.dailyRate);
      const statusId = 1;


      console.log(bikeType);
      console.log(dailyRate);

      const rentalInfo = await adminController.addBike(bikeType, statusId, dailyRate);
      res.redirect('/');
  
    } catch (err) {
      next(err);
    }
  });

module.exports = router;