const User = require("../models/User");
const bcrypt = require("bcrypt");
const {createToken}  =require("../midddleware/auth");
const { json } = require("express");

const signUp = async(req,res)=>{
    const {name, email, phone, password}= req.body;
    let existingUSer;
    try{
        existingUSer = await User.findOne({email});
    }catch(e){
        console.log(e);
    }

    if(existingUSer){
        return res.status(400).json({message: "already!!"})
    }
    const hash = bcrypt.hashSync(password, 10);
    const user = new User({
        name, email, phone,password: hash
    })

    try{
        user.save();
        return res.status(201).json({user});
    }catch(err){
        console.log(err);
    }
}

const singIn =async (req,res)=>{
    const {email, password} = req.body;
    let existingUSer;
    try{
        existingUSer = await User.findOne({email});
        if(!existingUSer){
            return res.status(404).json({
                message: "User not found",
                isUserRegistered : false
            })
        }
        const isPasswordCorrect =  bcrypt.compareSync(password, existingUSer.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message: "Incoorect Password"})
        }
        const payload = existingUSer?.id;
        const token= createToken({payload});
        console.log(payload);
        return res.set("Authorization", `Bearer ${token}`, {httpOnly: true}).json({token})

        
    }catch(err){
        console.log(err);
    }
    console.log(existingUSer.id);
    
}

module.exports = {signUp, singIn};