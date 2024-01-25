const mongoose = require("mongoose");

// new keyword is optional in following block of code
const city_Schema = new mongoose.Schema(
    {
        city_name: {
            type:String,
            trim:true
        },
        state: {
            type:mongoose.Types.ObjectId,
            ref:"State"
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

const city = mongoose.model("City",city_Schema);
module.exports = city;
