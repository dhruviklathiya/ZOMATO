const { admin_Service } = require("../services");
// Create admin
const create_admin = async(req,res) => {
    try {
        const reqbody = req.body;
        const admin_exist = await admin_Service.get_admin_by_name(reqbody.admin_name);
        if(admin_exist){
            throw new Error("Admin on this name already exist -!- ");
        }
        const admin = await admin_Service.create_admin(reqbody);
        if(!admin){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Admin created successfully ^-^ ",
            data:admin
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Update admin
const update_admin = async(req,res) => {
    try {
        const admin_id = req.params.adminId;
        const reqbody = req.body;
        const admin_exist = await admin_Service.get_admin_by_id(admin_id);
        if(!admin_exist){
            throw new Error("Admin does not exist -!- ");
        }
        const admin_update = await admin_Service.update_admin(admin_id,reqbody);
        if(!admin_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Admin updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Delete admin
const delete_admin = async(req,res) => {
    try {
        const admin_id = req.params.adminId;
        const admin_exist = await admin_Service.get_admin_by_id(admin_id);
        if(!admin_exist){
            throw new Error("Admin does not exist -!- ");
        }
        const admin_delete = await admin_Service.delete_admin(admin_id);
        if(!admin_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Admin deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Get admin list
const get_admin_list = async(req,res) => {
    try {
        const admin_list = await admin_Service.get_admin_list();
        if(!admin_list){
          throw new Error("Admin list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get admin list dispatch successfully ^-^ ",
          data: admin_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

// Expoting controller object
module.exports = {
    create_admin,
    get_admin_list,
    update_admin,
    delete_admin,
}