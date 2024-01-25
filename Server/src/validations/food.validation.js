const Joi = require("joi");

// create food validation
const create_food = {
  body: Joi.object().keys({
    food_name: Joi.string().required().trim(),
    food_price: Joi.number().required(),
    restaurant: Joi.string().required().trim(),
  }),
};
// Exporting validations object
module.exports = {
    create_food
}

