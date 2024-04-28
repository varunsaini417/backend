const { types, string } = require("joi");
const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    password:{
        type: String
    }
});

module.exports = mongoose.model("User", userSchema);