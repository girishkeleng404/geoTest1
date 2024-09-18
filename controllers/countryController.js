const catchAsync = require('../utils/catchError');
const { user, historical_bg, population } = require('../models');
const { country } = require('../models');
const AppError = require("../utils/appError");








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

  if (body.background_description || body.total_population) {

    if (body.background_description) {

      await historical_bg.create({
        country_id: newCountry.id,
        background_description: body.background_description,
      })
    }

    if (body.total_population) {
      await population.create({
        country_id: newCountry.id,
        total_population: body.total_population,
        male_population: body.male_population,
        female_population: body.female_population,
        population_estimate_year: body.population_estimate_year,
        female_comparison_ranking: body.female_comparison_ranking,
        male_comparison_ranking: body.male_comparison_ranking,
        total_comparison_ranking: body.total_comparison_ranking,
      });
    }

  }

  const countryWithBackground = await country.findOne({
    where: { id: newCountry.id },
    include: [
      {
        model: historical_bg,
        as: 'history', // Ensure this alias matches the association
      },
      {
        model: population,
        as: 'populationData'
      }
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
      },
      {
        model: population,
        as: 'populationData',
        attributes: ['total_population','male_population', 'female_population', 'population_estimate_year', 'female_comparison_ranking', 'male_comparison_ranking','total_comparison_ranking' ]
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