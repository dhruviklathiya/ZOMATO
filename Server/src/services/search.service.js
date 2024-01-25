const { state_Service, city_Service, restaurant_type_Service } = require(".")
const { City, Restaurant } = require("../models")


const city_by_state = async(state_id) => {
    return City.find({$or:[{state:`${state_id}`}]})
}

const city_by_state_json = async(state_name) => {
    const city = await state_Service.get_state_by_name(state_name)
    return City.find({$or:[{state:`${state._id}`}]})
}

const restaurant_by_city = async(cityId) => {
    return Restaurant.find({$or:[{city:`${cityId}`}]})
}

const restaurant_by_city_json = async(city_name) => {
    const city = await city_Service.get_city_by_name(city_name)
    return Restaurant.find({$or:[{city:`${city._id}`}]})
}

const restaurant_by_type_and_city = async(city_name,restaurant_type) => {
    const city = await city_Service.get_city_by_name(city_name)
    const restaurant_type_ = await restaurant_type_Service.get_restaurant_type_by_name(restaurant_type)
    console.log(restaurant_type_._id);
    console.log(city._id);
    return Restaurant.find({$and:[{city:city._id},{restaurant_type:restaurant_type_._id}]})
}
module.exports = {
    city_by_state,
    city_by_state_json,
    restaurant_by_city,
    restaurant_by_city_json,
    restaurant_by_type_and_city
}