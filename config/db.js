const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.ATLAS_URI
mongoose.connect(URI).then(()=>{
    console.log("connected");
}).catch(err=>{
    console.log(err);
})

