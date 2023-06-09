const router = require('express').Router();
const checkoutController = require('../controllers/checkoutController');


router.get('/', function(req, res, next) {
    const { bikeId, bikeType, dailyRate, 'start-date': startDate, 'end-date': endDate } = req.query;
    
    const rateString = dailyRate;
    const rate = parseFloat(rateString.substring(1));
    rate.toFixed(2);;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const daysDifference = Math.floor((end - start) / (1000 * 60 * 60 * 24));
    
    // Calculate the total
    const total = rate * daysDifference;
    
    res.render('checkout', { bikeId, bikeType, dailyRate, startDate, endDate, total });
  });

  
  
  router.post('/', async (req, res, next) => {
    try {
      
      var bikeId = req.body.bikeId;
      var user = req.session.user;
      var userId = user.userId;
      var rentalStart = req.body.startDate;
      var rentalEnd = req.body.endDate;
  
      const rentalInfo = await checkoutController.createNewRental(bikeId, userId, rentalStart, rentalEnd);
      await checkoutController.updateBikeStatus(2, bikeId);
      res.redirect('/');
    } catch (err) {
      next(err);
    }
  });



router.put('/', async (req, res, next) => {
  try {
    var statusId = req.body.statusId;
    var bikeId = req.body.bikeId;

    const rentalInfo = await checkoutController.updateBikeStatus(statusId, bikeId);
    res.status(201).send({ message: `Successfully updated bike rental status` });
  } catch (err) {
    next(err)
  }
});


  
  module.exports = router;