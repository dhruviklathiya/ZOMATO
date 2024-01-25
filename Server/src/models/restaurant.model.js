const mongoose = require("mongoose");

const restaurant_Schema = mongoose.Schema(
    {
        restaurant_name:{
            type:String,
            trim:true
        },
        restaurant_address:{
            type:String,
            trim:true
        },
        restaurant_contact_no:{
            type:String,
            trim:true
        },
        owner_detail:{
            type:String,
            trim:true
        },
        owner_contact_no:{
            type:String,
            trim:true
        },
        whatsapp_notification:{
            type:Boolean,
            default:true
        },
        restaurant_image:{
            type:String,
            trim:true
        },
        food_image:{
            type:String,
            trim:true
        },
        restaurant_type:{
            type:mongoose.Types.ObjectId,
            ref:"Restaurant_type"
        },
        city:{
            type:mongoose.Types.ObjectId,
            ref:"City"
        },
        restaurant_status:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const restaurant = mongoose.model("Restaurant",restaurant_Schema);
module.exports = restaurant;