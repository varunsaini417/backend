const Joi = require("joi");

const signInScehma = Joi.object({
    email : Joi.string().email().required(),
    password: Joi.string().min(2).required()
})

const signInvalidation = (req,res,next)=>{
    const {error} = signInScehma.validate(req.body);
    if(error){
        return res.status(422).json({error})
    }
    next();
}

module.exports={signInvalidation};