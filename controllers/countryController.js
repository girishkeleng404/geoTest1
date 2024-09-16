const catchAsync = require('../utils/catchError');
const {user} = require('../models');
const {country} = require('../models');
const AppError = require("../utils/appError");
 



const createCountry = catchAsync(async(req,res,next)=>{
    const body = req.body;
     const userId = req.user.id;
     console.log(req.user);
    const userType = req.user.userType;
      
    if (userType !== '0') {
        return next(new AppError('You are not authorized to create a country', 403));
    }

     const newCountry = await country.create({
        name:body.name,
        iso_code:body.iso_code,
        capital:body.capital,
        countryImage:body.countryImage,
        coastline_km:body.coastline_km,
        climate:body.climate,
        createdBy:userId,
     });

     return res.status(201).json({
        status: 'success',
        data:newCountry
     });

});


const getAllCountry = catchAsync(async(req,res,next)=>{
   const result = await country.findAll();

   res.status(200).json({
      message:"success",
      data:result
   })


});


const getByIso = catchAsync(async(req,res,next)=>{
   const iso = req.params.iso;
   console.log(iso);
   const result = await country.findOne({where:{iso_code:iso}});

   if(!result){
      return next(new AppError('No country found',404))
   }

   res.status(200).json({
      message:'success',
      data:result
   });
});


const getByName = catchAsync(async(req,res,next)=>{
   const name = req.params.name;
   const result = await country.findOne({where:{name:name}});
   
   if(!result){
      return next(new AppError('No country found with name'+ name, 404));
   }
   
   res.status(200).json({
      message:'success',
      data:result,
   })

})


module.exports = {createCountry, getAllCountry, getByIso,  getByName };