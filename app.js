const express = require('express');
const env = require('dotenv');


const app = express();
env.config();
const port = process.env.APP_PORT;


app.get('/',async(req,res)=>{
    res.status(200).json({
        message: "success",
    })
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})