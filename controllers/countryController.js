const catchAsync = require('../utils/catchError');
const { user, historical_bg } = require('../models');
const { country } = require('../models');
const AppError = require("../utils/appError");
const { where } = require('sequelize');




const createCountry = catchAsync(async (req, res, next) => {
  const body = req.body;
  const userId = req.user.id;
  console.log(req.user);
  const userType = req.user.userType;

  if (userType !== '0') {
    return next(new AppError('You are not authorized to create a country', 403));
  }

  const newCountry = await country.create({
    name: body.name,
    iso_code: body.iso_code,
    capital: body.capital,
    countryImage: body.countryImage,
    coastline_km: body.coastline_km,
    climate: body.climate,
    createdBy: userId,
  });

  if (body.background_description) {
    await historical_bg.create({
      country_id: newCountry.id,
      background_description: body.background_description,
    })
  }

  const countryWithBackground = await country.findOne({
    where: { id: newCountry.id },
    include: [
      {
        model: historical_bg,
        as: 'histories', // Ensure this alias matches the association
      },
    ],
  });

  return res.status(201).json({
    status: 'success',
    data: countryWithBackground,
  });

});


const getAllCountry = catchAsync(async (req, res, next) => {
  const result = await country.findAll({
    include: [
      {
        model: historical_bg,
        as: 'history', // alias for querying
        attributes: ['background_description']
      }

    ]
  });

  res.status(200).json({
    message: "success",
    data: result
  })


});



const getByQuery = catchAsync(async (req, res, next) => {
  const { name, iso } = req.query;

  let result;
  if (name) {
    result = await country.findOne({
      where: { name: name }, include: [{
        model: historical_bg,
        as: 'history', // alias for querying
        attributes: ['background_description']
      }]
    });
    if (!result) {
      return next(new AppError('No country found with name ' + name, 404));
    }
  } else if (iso) {
    result = await country.findOne({
      where: { iso_code: iso }, include: [{
        model: historical_bg,
        as: 'history', // alias for querying
        attributes: ['background_description']
      }]
    });
    if (!result) {
      return next(new AppError('No country found with iso code ' + iso, 404));
    }
  } else {
    return next(new AppError('Please provide a name or iso query', 400));
  }

  res.status(200).json({
    message: 'success',
    data: result,
  });
});


module.exports = { createCountry, getAllCountry, getByQuery };