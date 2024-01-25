const { country_Service } = require("../services");

const create_country = async(req,res) => {
    try {
        const reqbody = req.body;
        const country_exist = await country_Service.get_country_by_name(reqbody.country_name);
        if(country_exist){
            throw new Error("Country on this name already exist -!- ");
        }
        const country = await country_Service.create_country(reqbody);
        if(!country){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Country created successfully ^-^ ",
            data:country
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_country = async(req,res) => {
    try {
        const country_id = req.params.countryId;
        const reqbody = req.body;
        const country_exist = await country_Service.get_country_by_id(country_id);
        if(!country_exist){
            throw new Error("Country does not exist -!- ");
        }
        const country_update = await country_Service.update_country(country_id,reqbody);
        if(!country_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Country updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_country = async(req,res) => {
    try {
        const country_id = req.params.countryId;
        const country_exist = await country_Service.get_country_by_id(country_id);
        if(!country_exist){
            throw new Error("Country does not exist -!- ");
        }
        const country_delete = await country_Service.delete_country(country_id);
        if(!country_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Country deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_country_list = async(req,res) => {
    try {
        const country_list = await country_Service.get_country_list();
        if(!country_list){
          throw new Error("Country list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get country list dispatch successfully ^-^ ",
          data: country_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_country,
    get_country_list,
    update_country,
    delete_country
}