const express = require("express");
const validate = require("../../middlewares/validate");
const { admin_Validation } = require("../../validations");
const { admin_Controller } = require("../../controllers");
const router = express.Router()
// Create admin
router.post(
    "/create-admin",
    validate(admin_Validation.create_admin),
    admin_Controller.create_admin
)
// Update admin with id
router.put(
    "/update-admin/:adminId",
    validate(admin_Validation.create_admin),
    admin_Controller.update_admin
)
// Delete admin by id
router.delete(
    "/delete-admin/:adminId",
    admin_Controller.delete_admin
)
//  Tag list
router.get(
    "/list",
    admin_Controller.get_admin_list
)

module.exports = router;