const { Restaurant_type } = require("../models");
// Get restaurant_type by name
const get_restaurant_type_by_name = async(restaurant_type) => {
    return Restaurant_type.findOne({restaurant_type})
}
// Create restaurant_type
const create_restaurant_type = async(reqbody) => {
    return Restaurant_type.create(reqbody);
}
// Get restaurant_type list
const get_restaurant_type_list = async() => {
    return Restaurant_type.find();
}
// Get restaurant_type by id
const get_restaurant_type_by_id = async(restaurant_type_id) => {
    return Restaurant_type.findById(restaurant_type_id);
}
// Update restaurant_type by id
const update_restaurant_type = async(restaurant_type_id,reqbody) => {
    return Restaurant_type.findByIdAndUpdate(restaurant_type_id,{$set:reqbody});
}
// Delete restaurant_type
const delete_restaurant_type = async(restaurant_type_id) => {
    return Restaurant_type.findByIdAndDelete(restaurant_type_id);
}
// Exporting services object
module.exports = {
    get_restaurant_type_by_name,
    create_restaurant_type,
    get_restaurant_type_list,
    get_restaurant_type_by_id,
    update_restaurant_type,
    delete_restaurant_type
}