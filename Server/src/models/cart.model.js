const mongoose = require("mongoose");

const cart_Schema = new mongoose.Schema(
    {
        total_items:{
            type:Number,
            default:0
        },
        total_price:{
            type:Number,
            default:0
        },
        coupon_code:{
            type:String,
            trim:true
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        food1: {
            type: mongoose.Types.ObjectId,
            ref: "Food"
        },
        food2: {
            type: mongoose.Types.ObjectId,
            ref: "Food"
        },
        food3: {
            type: mongoose.Types.ObjectId,
            ref: "Food"
        },
        food4: {
            type: mongoose.Types.ObjectId,
            ref: "Food"
        },
        food5: {
            type: mongoose.Types.ObjectId,
            ref: "Food"
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const cart = mongoose.model("Cart",cart_Schema)
module.exports = cart;