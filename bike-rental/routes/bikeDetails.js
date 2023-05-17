const express = require('express');
const router = express.Router();
const bikeDetailsController = require('../controllers/bikeDetailsController');

// this is a hardcoded result of what we would expect from the actaul query :)
let selectedBike = {
    bikeId: 1,
    bikeName: 'Roadster',
    bikeType: 'Road Bike',
    dailyRate: '$6',
    availability: true
  }

/* GET
similarly to the bikeRental, we expect a query in the 
bikeDetails controller to return a single bike object
which will be displayed in the res.render

router.get('/bikeDetails', async (req, res, next) => {
  try {
    const bikeId = req.query.bikeId;
    const bike = await bikeDetailsController.getBikeDetails(bikeId);
    res.render('bikeDetails', { bike });
  } catch (err) {
    next(err);
  }
});
*/


/*POST
//this is the route with the method from the controller to save rental information to 
//the database (the information is passed from the form on the bikeDetails view)
//important to note, we need to pass through the user id in here somehow (TODO)

router.post('/bikeDetails', async (req, res, next) => {
  try {
    const { bikeId,  startDate, endDate } = req.body;

    await bikeDetailsController.saveFormData(bikeId, startDate, endDate);

    // Redirect or send a response indicating success
    res.redirect('/success');
  } catch (err) {
    next(err);
  }
});
*/


router.get('/', function(req, res, next) {
    res.render('bikeDetails', { bike: selectedBike });
  });

module.exports = router;