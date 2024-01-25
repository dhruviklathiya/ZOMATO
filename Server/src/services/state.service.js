const { State } = require("../models");

const get_state_by_name = async(state_name) => {
    return State.findOne({state_name})
}

const create_state = async(reqbody) => {
    return State.create(reqbody);
}

const get_state_list = async() => {
    return State.find().populate("country");
}

const get_state_by_id = async(state_id) => {
    return State.findById(state_id);
}

const update_state = async(state_id,reqbody) => {
    return State.findByIdAndUpdate(state_id,{$set:reqbody});
}

const delete_state = async(state_id) => {
    return State.findByIdAndDelete(state_id);
}

module.exports = {
    get_state_by_name,
    create_state,
    get_state_list,
    get_state_by_id,
    update_state,
    delete_state
}