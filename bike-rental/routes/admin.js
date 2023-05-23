const router = require('express').Router();
const adminController = require('../controllers/adminController');

  router.get('/', async (req, res, next) => {
    try {
      res.render('admin'); 
    } catch (err) {
      next(err); 
    }
  });

module.exports = router;