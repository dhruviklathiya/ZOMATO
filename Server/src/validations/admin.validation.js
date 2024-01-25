const Joi = require("joi");

// create admin validation
const create_admin = {
    body: Joi.object({
            admin_name:Joi.string().required().trim(),
            res_list: Joi.array().items(Joi.object({
                                restaurant_name: Joi.string().required().trim(),
                                restaurant_name: Joi.string().optional().trim(),
                                restaurant_name: Joi.string().optional().trim(),
                                restaurant_name: Joi.string().optional().trim(),
                            })).required()})
  };
// Exporting validations object
module.exports = {
    create_admin
}