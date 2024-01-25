const { city_Service } = require("../services");

const create_city = async(req,res) => {
    try {
        const reqbody = req.body;
        const city_exist = await city_Service.get_city_by_name(reqbody.city_name);
        if(city_exist){
            throw new Error("City on this name already exist -!- ");
        }
        const city = await city_Service.create_city(reqbody);
        if(!city){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"City created successfully ^-^ ",
            data:city
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_city = async(req,res) => {
    try {
        const city_id = req.params.cityId;
        const reqbody = req.body;
        const city_exist = await city_Service.get_city_by_id(city_id);
        if(!city_exist){
            throw new Error("City does not exist -!- ");
        }
        const city_update = await city_Service.update_city(city_id,reqbody);
        if(!city_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"City updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_city = async(req,res) => {
    try {
        const city_id = req.params.cityId;
        const city_exist = await city_Service.get_city_by_id(city_id);
        if(!city_exist){
            throw new Error("City does not exist -!- ");
        }
        const city_delete = await city_Service.delete_city(city_id);
        if(!city_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"City deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_city_list = async(req,res) => {
    try {
        const city_list = await city_Service.get_city_list();
        if(!city_list){
          throw new Error("City list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "City list dispatch successfully ^-^ ",
          data: city_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_city,
    get_city_list,
    update_city,
    delete_city
}