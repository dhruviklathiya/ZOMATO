const { state_Service, search_Service, city_Service, restaurant_type_Service, restaurant_Service } = require("../services");

// City by state_id passed in params
const city_by_state = async(req,res) => {
    try {
        const state_exist = await state_Service.get_state_by_id(req.params.stateId)
        if(!state_exist){
            throw new Error("State by this name does not exist -!- ")
        }
        const city_list = await search_Service.city_by_state(req.params.stateId)
        console.log(city_list);
        res.status(200).json({
            success:true,
            message:"city list by state name dispatch sucessfully ^-^ ",
            data: city_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
// City by state name passed in json
const city_by_state_json = async(req,res) => {
    try {
        const state_exist = await state_Service.get_state_by_name(req.body.state_name)
        if(!state_exist){
            throw new Error("State by this name does not exist -!- ")
        }
        const city_list = await search_Service.city_by_state_json(req.body.state_name)
        res.status(200).json({
            success:true,
            message:"city list by state name dispatch sucessfully ^-^ ",
            data: city_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
// city by state name passed in params
const city_by_params_state_name = async(req,res) => {
    try {
        const state_exist = await state_Service.get_state_by_name(req.params.stateName)
        if(!state_exist){
            throw new Error("State by this name does not exist -!- ")
        }
        const city_list = await search_Service.city_by_state_json(req.params.stateName)
        console.log(city_list);
        res.status(200).json({
            success:true,
            message:"city list by state name dispatch sucessfully ^-^ ",
            data: city_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

// Restaurant by city_id passed in params
const restaurant_by_city = async(req,res) => {
    try {
        const city_exist = await city_Service.get_city_by_id(req.params.cityId)
        if(!city_exist){
            throw new Error("City by this name does not exist -!- ")
        }
        const restaurant_list = await search_Service.restaurant_by_city(req.params.cityId)
        console.log(restaurant_list);
        res.status(200).json({
            success:true,
            message:"Restaurant list by city name dispatch sucessfully ^-^ ",
            data: restaurant_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
// Restaurant by city name passed in json
const restaurant_by_city_json = async(req,res) => {
    try {
        const city_exist = await city_Service.get_city_by_name(req.body.city_name)
        if(!city_exist){
            throw new Error("City by this name does not exist -!- ")
        }
        const restaurant_list = await search_Service.restaurant_by_city_json(req.body.city_name)
        res.status(200).json({
            success:true,
            message:"Restaurant list by city name dispatch sucessfully ^-^ ",
            data: restaurant_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
// Restaurant by city name passed in params
const restaurant_by_params_city_name = async(req,res) => {
    try {
        const city_exist = await city_Service.get_city_by_name(req.params.cityName)
        if(!city_exist){
            throw new Error("City by this name does not exist -!- ")
        }
        const restaurant_list = await search_Service.restaurant_by_city_json(req.params.cityName)
        console.log(restaurant_list);
        res.status(200).json({
            success:true,
            message:"Restaurant list by city name dispatch sucessfully ^-^ ",
            data: restaurant_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
// Search restaurant by res_type & city name passed in json
const restaurant_by_type_and_city = async(req,res) => {
    try {
        const city_exist = await city_Service.get_city_by_name(req.body.city_name)
        if(!city_exist){
            throw new Error("City by this name does not exist -!- ")
        }
        const restaurant_exist = await restaurant_type_Service.get_restaurant_type_by_name(req.body.restaurant_type)
        if(!restaurant_exist){
            throw new Error("Restaurant by this type does not exist -!- ")
        }
        const restaurant_list = await search_Service.restaurant_by_type_and_city(req.body.city_name,req.body.restaurant_type)
        if(!restaurant_list){
            throw new Error("Something went wrong -!- ")
        }
        res.status(200).json({
            success: true,
            // messgae:`"Restaurant of ${req.body.city_name} type in ${req.body.restaurant_type} are following: ^-^ "`,
            messgae:"Restaurant  ^-^ ",
            data: restaurant_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
// Get restaurant by id
const get_restaurant_by_id = async(req,res) => {
    try {
        const restaurant_id = req.params.restaurantId;
        const restaurant_exist = await restaurant_Service.get_restaurant_by_id(restaurant_id);
        if(!restaurant_exist){
            throw new Error("Restaurant does not exist -!- ");
        }
        res.status(200).json({
            success:true,
            message:`"Restaurant by id ${restaurant_id} found successfully ^-^ "`,
            data: restaurant_exist
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
module.exports = {
    city_by_state,
    city_by_state_json,
    city_by_params_state_name,
    restaurant_by_city,
    restaurant_by_city_json,
    restaurant_by_params_city_name,
    restaurant_by_type_and_city,
    get_restaurant_by_id
}