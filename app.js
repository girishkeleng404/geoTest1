const express = require('express');
const env = require('dotenv');
const authRoute = require('./routes/authRoute');
const globleErrorHandler = require('./controllers/errorController');


const app = express();
env.config();
const port = process.env.APP_PORT;

app.use(express.json());

app.get('/',async(req,res)=>{
    res.status(200).json({
        message: "success",
    })
})

app.use('/api/v1/auth',authRoute);


// app.use('*', catchAsync(async (req, res, next) => {
//     // return next( new Error('Resource not found'))
//     throw new AppError(`Can't find ${req.originalUrl} on this server`, 404);


// }));
app.use(globleErrorHandler);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})