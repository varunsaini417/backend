const express = require("express");
const  {signUp, singIn}  = require("../controller/user-controller");
const userRouter = express.Router();
const {validatebody}  =require("../validation/createUser.validation")
const {signInvalidation} = require("../validation/signinUser.validation")
const {auth} = require("../midddleware/auth")

userRouter.get("/welcome", auth, (req,res)=>{
    res.send("Hello")
})
userRouter.get("/:id", auth, (req,res)=>{
    const id = req.params.id;
    res.status(200).json({response: id})
})
userRouter.post("/signup",validatebody, signUp);
userRouter.post("/signin", signInvalidation, singIn);
module.exports =  userRouter;