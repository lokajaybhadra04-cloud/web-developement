const Joi = require("joi"); 

const listingSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow("", null),
  image: Joi.string().uri().allow("", null),
  price: Joi.number().min(0).required(),
  location: Joi.string().required(),
  country: Joi.string().required(),
  category: Joi.string().required()
});

module.exports = listingSchema;