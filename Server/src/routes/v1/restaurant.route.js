const express = require("express");
const validate = require("../../middlewares/validate");
const { restaurant_Validation } = require("../../validations");
const { restaurant_Controller } = require("../../controllers");
const { upload } = require("../../middlewares/upload");
const router = express.Router()
// Create restaurant
router.post(
    "/create-restaurant",
    upload.array("restaurant_image",2),
    validate(restaurant_Validation.create_restaurant),
    restaurant_Controller.create_restaurant
)
// Update restaurant with id
router.put(
    "/update-restaurant/:restaurantId",
    validate(restaurant_Validation.create_restaurant),
    restaurant_Controller.update_restaurant
)
router.put(
    "/update-restaurant-status/:restaurantId",
    restaurant_Controller.update_status
)
// Delete restaurant by id
router.delete(
    "/delete-restaurant/:restaurantId",
    restaurant_Controller.delete_restaurant
)
//  Restaurant list
router.get(
    "/list",
    restaurant_Controller.get_restaurant_list
)
// Exporting router
module.exports = router;