const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.status(200).send({ message: 'OK' });
});

module.exports = router;