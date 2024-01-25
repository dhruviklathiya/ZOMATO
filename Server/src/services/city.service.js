const { City } = require("../models");

const get_city_by_name = async(city_name) => {
    return City.findOne({city_name})
}

const create_city = async(reqbody) => {
    return City.create(reqbody);
}

const get_city_list = async() => {
    return City.find().populate("state").populate("country");
}

const get_city_by_id = async(city_id) => {
    return City.findById(city_id);
}

const update_city = async(city_id,reqbody) => {
    return City.findByIdAndUpdate(city_id,{$set:reqbody});
}

const delete_city = async(city_id) => {
    return City.findByIdAndDelete(city_id);
}

module.exports = {
    get_city_by_name,
    create_city,
    get_city_list,
    get_city_by_id,
    update_city,
    delete_city
}