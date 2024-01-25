const mongoose = require("mongoose");

// new keyword is optional in following block of code
const country_Schema = new mongoose.Schema(
    {
        country_name: {
            type:String,
            trim:true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const country = mongoose.model("Country",country_Schema);
module.exports = country;