const express = require("express");
const { user_Validation } = require("../../validations");
const { user_Controller } = require("../../controllers");
const validate = require("../../middlewares/validate");
// Initializing express.Router() in router
const router = express.Router();
// Create user route
router.post(
    "/create-user",
    validate(user_Validation.create_user),
    user_Controller.create_user
);
// Get user list route
router.get(
    "/list",
    user_Controller.get_user_list
);
// Delete user by id route
router.delete(
    "/delete-user/:userId",
    user_Controller.delete_user
);
// Update user route
router.put(
    "/update-user/:userId",
    validate(user_Validation.create_user),
    user_Controller.update_user
)
// User send mail route
router.post(
    "/send-mail",
    validate(user_Validation.send_mail),
    user_Controller.send_mail
  );
// Exporting routes
module.exports = router;