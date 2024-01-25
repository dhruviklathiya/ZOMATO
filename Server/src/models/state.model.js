const mongoose = require("mongoose");

// new keyword is optional in following block of code
const state_Schema = new mongoose.Schema(
    {
        state_name: {
            type:String,
            trim:true
        },
        country: {
            type:mongoose.Types.ObjectId,
            ref:"Country"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const state = mongoose.model("State",state_Schema);
module.exports = state;