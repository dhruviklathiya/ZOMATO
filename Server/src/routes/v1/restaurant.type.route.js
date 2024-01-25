const express = require("express");
const validate = require("../../middlewares/validate");
const { restaurant_type_Validation } = require("../../validations");
const { restaurant_type_Controller } = require("../../controllers");
const router = express.Router()
// Create restaurant_type
router.post(
    "/create-restaurant-type",
    validate(restaurant_type_Validation.create_restaurant_type),
    restaurant_type_Controller.create_restaurant_type
)
// Update restaurant_type with id
router.put(
    "/update-restaurant-type/:restaurant_typeId",
    validate(restaurant_type_Validation.create_restaurant_type),
    restaurant_type_Controller.update_restaurant_type
)
// Delete restaurant_type by id
router.delete(
    "/delete-restaurant-type/:restaurant_typeId",
    restaurant_type_Controller.delete_restaurant_type
)
//  Tag list
router.get(
    "/list",
    restaurant_type_Controller.get_restaurant_type_list
)

module.exports = router;