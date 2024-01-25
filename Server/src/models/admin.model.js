const mongoose = require("mongoose");

// Creating schema for admin
const admin_Schema = new mongoose.Schema(
    {
        admin_name: {
            type: String,
            trim: true
        },
        restaurant_name: {
            type: mongoose.Types.ObjectId,
            ref: "Restaurant"
        },
        // res_list: [
        //     {
        //         restaurant_name: {
        //             type: mongoose.Types.ObjectId,
        //             ref: "Restaurant"
        //         }
        //     },
        //     {
        //         restaurant_name: {
        //             type: mongoose.Types.ObjectId,
        //             ref: "Restaurant"
        //         }
        //     },
        //     {
        //         restaurant_name: {
        //             type: mongoose.Types.ObjectId,
        //             ref: "Restaurant"
        //         }
        //     },
        //     {
        //         restaurant_name: {
        //             type: mongoose.Types.ObjectId,
        //             ref: "Restaurant"
        //         }
        //     },
        // ],
        verified: {
            type: Boolean,
            default: true
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
// Declaring model for admin
const admin = mongoose.model("Admin", admin_Schema);
module.exports = admin