const jwt = require("jsonwebtoken");

const auth = (req,res,next)=>{
    const token = req?.headers?.authorization?.split(' ')[1]
    console.log(token);
    if(!token){
        return res.status(401).json({message: "Yoy are Unaithorized", isUnAuthorized: true});
    }

    try{
        const decode = jwt.verify(token, 'my_secret');
        req.user = decode;
        next()
    }catch(error){
        console.log(error);
    }
}

const createToken = (payload)=>{
    const token =  jwt.sign(payload, 'my_secret', {expiresIn: '24h'});
    return token;
}

module.exports = {auth, createToken};