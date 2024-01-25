const express = require("express");
const validate = require("../../middlewares/validate");
const { city_Validation } = require("../../validations");
const { city_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-city",
    validate(city_Validation.create_city),
    city_Controller.create_city
)

router.put(
    "/update-city/:cityId",
    validate(city_Validation.create_city),
    city_Controller.update_city
)

router.delete(
    "/delete-city/:cityId",
    city_Controller.delete_city
)

router.get(
    "/list",
    city_Controller.get_city_list
)

module.exports = router;