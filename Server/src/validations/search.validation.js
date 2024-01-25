const Joi = require("joi");

// Search city by state name
const city_by_state = {
    params: Joi.object({
        state_name:Joi.string().required().trim()
    })
}

const res_type_and_city = {
    body: Joi.object({
        restaurant_type: Joi.string().required().trim(),
        city_name: Joi.string().required().trim(),
    })
}
module.exports = {
    city_by_state,
    res_type_and_city
}