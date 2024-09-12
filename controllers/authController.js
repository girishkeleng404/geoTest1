const jwt = require("jsonwebtoken");
const user = require("../models/user");


const generateToken =(payload)=>{
    return jwt.sign(payload,process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRES_IN,
    })
};

const signup = async(req,res,next)=>{
    const body = req.body;

    if(!['1','2'].includes(body.userType)){
        throw new Error("Please enter a valid user type",400)
    }
    const newUser = await user.create({
        userType:body.userType,
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email,
        password:body.password,
    }

 );
 if(!newUser){
    return next(new Error("User not created",400));
 }

 const result = newUser.toJSON();
 delete result.password;
 delete result.deletedAt;
 result.token= generateToken({
    id:result.id
 })
}