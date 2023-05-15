const Joi = require('joi'); //Library that will handle all the validation for any data that is added to the database
const validator = require('express-joi-validation').createValidator({});

const userInformationSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
});

const emailSchema = Joi.object({
    email: Joi.string().required(),
});

module.exports ={
    userInformationValidator: validator.body(userInformationSchema),
    emailValidator: validator.params(emailSchema),
}