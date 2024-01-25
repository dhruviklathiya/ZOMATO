const { Country } = require("../models");

const get_country_by_name = async(country_name) => {
    return Country.findOne({country_name})
}

const create_country = async(reqbody) => {
    return Country.create(reqbody);
}

const get_country_list = async() => {
    return Country.find();
}

const get_country_by_id = async(country_id) => {
    return Country.findById(country_id);
}

const update_country = async(country_id,reqbody) => {
    return Country.findByIdAndUpdate(country_id,{$set:reqbody});
}

const delete_country = async(country_id) => {
    return Country.findByIdAndDelete(country_id);
}

module.exports = {
    get_country_by_name,
    create_country,
    get_country_list,
    get_country_by_id,
    update_country,
    delete_country
}