const db = require('../dbconnection/db');
require('mssql/msnodesqlv8');
const router = require('express').Router();


router.get('/test', (req, res) => {
    res.status(200).send({ message: 'OK' })
});

module.exports = router;