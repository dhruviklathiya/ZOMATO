const Joi = require("joi");

/** create city */
const create_city = {
  body: Joi.object().keys({
    city_name: Joi.string().required().trim(),
    state: Joi.string().required().trim(),
    country: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_city
}