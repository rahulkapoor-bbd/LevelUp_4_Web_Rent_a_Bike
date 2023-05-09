const router = require('express').Router();

router.get('/test', (req, res) => {
    res.status(200).send({ message: 'OK' })
});

module.exports = router;