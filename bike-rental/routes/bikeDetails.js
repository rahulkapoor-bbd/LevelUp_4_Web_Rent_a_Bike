const router = require('express').Router();
const bikeDetailsController = require('../controllers/bikeDetailsController');

  router.get('/', async (req, res, next) => {
    try {
      const bikeId = req.query.bikeId;
      const bike = await bikeDetailsController.getBikeDetails(bikeId);
      res.render('bikeDetails', { bike: bike[0] }); 
    } catch (err) {
      next(err);
    }
  });

router.post('/', async (req, res, next) => {
  try {
    var bikeId = req.body.bikeId;
    var userId = req.body.userId;
    var rentalStart = req.body.rentalStart;
    var rentalEnd = req.body.rentalEnd;

    const rentalInfo = await bikeDetailsController.createNewRental(bikeId, userId, rentalStart, rentalEnd);
    res.status(201).send({ message: `Successfully created rental booking` });
  } catch (err) {
    next(err)
  }
});

module.exports = router;