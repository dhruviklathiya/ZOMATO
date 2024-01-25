const { state_Service } = require("../services");

const create_state = async(req,res) => {
    try {
        const reqbody = req.body;
        const state_exist = await state_Service.get_state_by_name(reqbody.state_name);
        if(state_exist){
            throw new Error("State on this name already exist -!- ");
        }
        const state = await state_Service.create_state(reqbody);
        if(!state){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"State created successfully ^-^ ",
            data:state
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_state = async(req,res) => {
    try {
        const state_id = req.params.stateId;
        const reqbody = req.body;
        const state_exist = await state_Service.get_state_by_id(state_id);
        if(!state_exist){
            throw new Error("State does not exist -!- ");
        }
        const state_update = await state_Service.update_state(state_id,reqbody);
        if(!state_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"State updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_state = async(req,res) => {
    try {
        const state_id = req.params.stateId;
        const state_exist = await state_Service.get_state_by_id(state_id);
        if(!state_exist){
            throw new Error("State does not exist -!- ");
        }
        const state_delete = await state_Service.delete_state(state_id);
        if(!state_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"State deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_state_list = async(req,res) => {
    try {
        const state_list = await state_Service.get_state_list();
        if(!state_list){
          throw new Error("State list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get state list dispatch successfully ^-^ ",
          data: state_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_state,
    get_state_list,
    update_state,
    delete_state
}