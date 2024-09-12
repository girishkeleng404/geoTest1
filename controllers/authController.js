const jwt = require("jsonwebtoken");
const user = require("../models/user");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchError");


const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
};

const signup = catchAsync(async (req, res, next) => {
    const body = req.body;

    if (!['1', '2'].includes(body.userType)) {
        throw new Error("Please enter a valid user type", 400)
    }
    const newUser = await user.create({
        userType: body.userType,
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
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
})

module.exports = {
    signup
}