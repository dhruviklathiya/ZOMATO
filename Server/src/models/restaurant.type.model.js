const mongoose = require("mongoose");

const restaurant_type_Schema = mongoose.Schema(
    {
        restaurant_type:{
            type:String,
            trim:true
        },
        type_desc:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const restaurant_type = mongoose.model("Restaurant_type",restaurant_type_Schema);
module.exports = restaurant_type;