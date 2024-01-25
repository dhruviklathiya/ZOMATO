const { Food } = require("../models");
// Get food by name
const get_food_by_name = async(food_name) => {
    return Food.findOne({food_name})
}
// Create food
const create_food = async(reqbody) => {
    return Food.create(reqbody);
}
// Get food list
const get_food_list = async() => {
    return Food.find().populate({
        path:"restaurant",
        select:["restaurant_name"]
    });
}
// Get food by id
const get_food_by_id = async(food_id) => {
    return Food.findById(food_id);
}
// Update food by id
const update_food = async(food_id,reqbody) => {
    return Food.findByIdAndUpdate(food_id,{$set:reqbody});
}
// Delete food
const delete_food = async(food_id) => {
    return Food.findByIdAndDelete(food_id);
}
// Exporting services object
module.exports = {
    get_food_by_name,
    create_food,
    get_food_list,
    get_food_by_id,
    update_food,
    delete_food
}