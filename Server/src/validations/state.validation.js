const Joi = require("joi");

/** create state */
const create_state = {
  body: Joi.object().keys({
    state_name: Joi.string().required().trim(),
    country: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_state
}