const Joi = require("joi");

/** create country */
const create_country = {
  body: Joi.object().keys({
    country_name: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_country
}