const express = require("express");
const validate = require("../../middlewares/validate");
const { state_Validation } = require("../../validations");
const { state_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-state",
    validate(state_Validation.create_state),
    state_Controller.create_state
)

router.put(
    "/update-state/:stateId",
    validate(state_Validation.create_state),
    state_Controller.update_state
)

router.delete(
    "/delete-state/:stateId",
    state_Controller.delete_state
)

router.get(
    "/list",
    state_Controller.get_state_list
)



module.exports = router;