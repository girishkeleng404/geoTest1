const jwt = require("jsonwebtoken");
const {user} = require("../models");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchError");
const bcrypt = require("bcrypt");


const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
};

const signup = catchAsync(async (req, res, next) => {
    const body = req.body;

    if (!['0','1', '2'].includes(body.userType)) {
        throw new Error("Please enter a valid user type", 400)
    }
    const newUser = await user.create({
        userType: body.userType,
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        confirmPassword: body.confirmPassword,
    }

    );
    if (!newUser) {
        return next(new AppError("User not created", 400));
    }

    const result = newUser.toJSON();
    delete result.password;
    delete result.deletedAt;
    result.token = generateToken({
        id: result.id
    })

    return res.status(201).json({
        status: 'success',
        message: 'User created successfully',
        data: result
    })
});


const login = catchAsync(async(req,res,next)=>{
    const {email, password} = req.body;

    if(!email && password){
        return next(new AppError("Please enter valid email and password", 400))
    }
     const result = await user.findOne({where:{email}});
     console.log(result);

     if(!result || (! await bcrypt.compare(password, result.password))){
        return next(new AppError("Incorrect Email or password", 401))
     }
     const token = generateToken({id:result.id});
     return res.json({
        status: 'success',
        token,
     })

})


const authentication = catchAsync(async(req,res,next)=>{
    let idToken="";

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        idToken = req.headers.authorization.split(" ")[1];
    } 
     
    if(!idToken){
        return next(new AppError("You are not logged in", 401));
    }

    jwt.verify(idToken,process.env.JWT_SECRET_KEY,(err,decoded)=>{
        if(err){
            return next(new AppError("Invalid token", 400));
        } 
        req.user = decoded;
        next();
    });

});


module.exports = {
    signup, login, authentication
}