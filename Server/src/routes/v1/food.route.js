const express = require("express");
const validate = require("../../middlewares/validate");
const { food_Validation } = require("../../validations");
const { food_Controller } = require("../../controllers");
const router = express.Router()
// Create food
router.post(
    "/create-food",
    validate(food_Validation.create_food),
    food_Controller.create_food
)
// Update food with id
router.put(
    "/update-food/:foodId",
    validate(food_Validation.create_food),
    food_Controller.update_food
)
// Delete food by id
router.delete(
    "/delete-food/:foodId",
    food_Controller.delete_food
)
//  Food list
router.get(
    "/list",
    food_Controller.get_food_list
)

module.exports = router;