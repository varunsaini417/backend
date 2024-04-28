const express = require("express");
const userRouter = require("./routes/user-route");

const cors = require("cors");
require("dotenv").config();
require("./config/db");
const app =  express();
app.use(cors());

app.use(express.json());

app.use("/api/users", userRouter);
app.listen(5000, ()=>{
    console.log("server started");
})