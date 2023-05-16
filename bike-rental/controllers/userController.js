const router = require('express').Router();
const { userInformationValidator, emailValidator } = require('../models/userModel');

router.post('/update', userInformationValidator, emailValidator, async (req, res, next) => {
    try {
        const payload = { ...req.params };
        const result = await updateUser(payload);
        res.status(201).send({ message: `User information succesfully added`, referenceNumber: result });
    } catch (err) {
        next(err);
    }
});