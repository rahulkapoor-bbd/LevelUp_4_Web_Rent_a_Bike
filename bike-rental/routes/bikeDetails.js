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

module.exports = router;