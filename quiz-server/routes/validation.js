const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Register validation
const registerValidation = (data) => {
  return registerSchema.validate(data);
}

//Login validation
const loginValidation = (data) => {
  return loginSchema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;