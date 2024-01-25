const express = require("express");
const validate = require("../../middlewares/validate");
const { country_Validation } = require("../../validations");
const { country_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-country",
    validate(country_Validation.create_country),
    country_Controller.create_country
)

router.put(
    "/update-country/:countryId",
    validate(country_Validation.create_country),
    country_Controller.update_country
)

router.delete(
    "/delete-country/:countryId",
    country_Controller.delete_country
)

router.get(
    "/list",
    country_Controller.get_country_list
)



module.exports = router;