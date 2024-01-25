const Joi = require("joi");

// create restaurant type
const create_restaurant_type = {
  body: Joi.object().keys({
    restaurant_type: Joi.string().required().trim(),
    type_desc: Joi.string().required().trim(),
  }),
};
// Exporting validations object
module.exports = {
    create_restaurant_type
}