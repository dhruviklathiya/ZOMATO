const { Admin, Restaurant, Order, User, Restaurant_type } = require("../models");
// Get admin by name
const get_admin_by_name = async (admin_name) => {
    return Admin.findOne({ admin_name })
}
// Create admin
const create_admin = async (reqbody) => {
    return Admin.create(reqbody);
}
// Get admin list
const get_admin_list = async () => {
    return Admin.find().populate("restaurant_name");
}
// Get admin by id
const get_admin_by_id = async (admin_id) => {
    return Admin.findById(admin_id);
}
// Update admin by id
const update_admin = async (admin_id, reqbody) => {
    return Admin.findByIdAndUpdate(admin_id, { $set: reqbody });
}
// Delete admin
const delete_admin = async (admin_id) => {
    return Admin.findByIdAndDelete(admin_id);
}
// Exporting services object
module.exports = {
    get_admin_by_name,
    create_admin,
    get_admin_list,
    get_admin_by_id,
    update_admin,
    delete_admin,
}