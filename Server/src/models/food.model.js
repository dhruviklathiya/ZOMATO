const mongoose = require("mongoose")

const food_Schema = new mongoose.Schema(
    {
        food_name:{
            type:String,
            trim:true
        },
        food_price:{
            type:Number,
            default:10
        },
        restaurant:{
            type:mongoose.Types.ObjectId,
            ref:"Restaurant"
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const food = mongoose.model("Food",food_Schema);
module.exports = food