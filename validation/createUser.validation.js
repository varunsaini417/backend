const Joi = require("joi");

const userValScehma= Joi.object({
    name: Joi.string().max(20).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().regex(/^[0-9]{10}$/).messages({
        'string.pattern.base': "Phone number must have 10 digits"
    }).required(),
    password: Joi.string().min(2).required()
})

const validatebody = (req,res,next)=>{
    const {error} = userValScehma.validate(req.body);
    if(error){
       return  res.status(422).json({error: error})
    }
    next();
}
module.exports = {
    validatebody
};