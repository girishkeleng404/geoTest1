const catchAsync = require('../utils/catchError');
const { user, historical_bg, population, nationality, language_religion, age_structure, dependency_ratio, population_rate, urbanization, sex_marriage, health_data, education_data } = require('../models');
const { country } = require('../models');
const AppError = require("../utils/appError");
const { populationService } = require('./service/countryService');




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
  // population data
  await populationService(body,newCountry.id);



  const countryWithBackground = await country.findOne({
    where: { id: newCountry.id },
    include: [
      {
        model: historical_bg,
        as: 'history', // Ensure this alias matches the association
      },
      {
        model: population,
        as: 'populationData',

        include: [
          {
            model: population_rate,
            as: 'population_rate_Data'
          },
          {
            model: nationality,
            as: 'nationality'
          },
          {
            model: language_religion,
            as: 'language_religion'
          },
          {
            model: age_structure,
            as: 'age_structure'
          },
          {
            model: dependency_ratio,
            as: 'dependency_ratio'
          },
          {
            model: urbanization,
            as: 'urbanization_Data'
          },
          {
            model: sex_marriage,
            as: 'sex_marriage_Data'
          },
          {
            model: health_data,
            as: 'health_data'
          },
          {
            model: education_data,
            as: 'education_data'
          }

        ]
      }
    ],
  });

  return res.status(201).json({
    status: 'success',
    data: countryWithBackground,
  });

});



// -------------------xxxx------------------------


const countryIncludes = [
  {
    model: historical_bg,
    as: 'history',
    attributes: ['background_description']
  },
  {
    model: population,
    as: 'populationData',
    attributes: ['total_population', 'male_population', 'female_population', 'population_estimate_year', 'female_comparison_ranking', 'male_comparison_ranking', 'total_comparison_ranking'],
    include: [
      {
        model: population_rate,
        as: 'population_rate_Data',
        attributes: [
          'population_growth_rate', 'population_growth_rate_rank', 'birth_rate', 'birth_rate_rank',
          'death_rate', 'death_rate_rank', 'total_fertility_rate', 'total_fertility_rate_rank',
          'gross_reproduction_rate', 'gross_reproduction_rate_rank', 'obesity_rate', 'obesity_rate_rank',
          'net_migration_rate', 'net_migration_rate_rank'
        ]
      },
      {
        model: nationality,
        as: 'nationality',
        attributes: ['nationality', 'ethnic_groups', 'population_distribution', 'demographic_profile']
      },
      {
        model: language_religion,
        as: 'language_religion',
        attributes: ['languages', 'major_language_sample', 'notes', 'religions']
      },
      {
        model: age_structure,
        as: 'age_structure',
        attributes: ['age_0_14', 'age_15_64', 'age_65_plus', 'estimated_year']
      },
      {
        model: dependency_ratio,
        as: 'dependency_ratio',
        attributes: ['total_dependency_ratio', 'youth_dependency_ratio', 'elderly_dependency_ratio', 'potential_support_ratio', 'dependency_estimated_year']
      },
      {
        model: urbanization,
        as: 'urbanization_Data',
        attributes: { exclude: ['country_id', 'createdAt', 'updatedAt', 'deletedAt'] }
      },
      {
        model: sex_marriage,
        as: 'sex_marriage_Data',
        attributes: { exclude: ['id', 'country_id', 'createdAt', 'updatedAt', 'deletedAt'] }
      },
      {
        model: health_data,
        as: 'health_data',
        attributes: { exclude: ['id', 'country_id', 'createdAt', 'updatedAt', 'deletedAt'] }
      },
      {
        model: education_data,
        as: 'education_data',
        attributes: { exclude: ['id', 'country_id', 'createdAt', 'updatedAt', 'deletedAt'] }
      }
    ]
  }
];



const getAllCountry = catchAsync(async (req, res, next) => {
  const result = await country.findAll({
    include: countryIncludes,
  });

  res.status(200).json({
    message: "success",
    data: result
  })

});


// ----------------------xxxxxxxxx---------------------


const getByQuery = catchAsync(async (req, res, next) => {
  const { name, iso } = req.query;

  let result;
  if (name) {
    result = await country.findAll({
      where: { name: name }, include: countryIncludes
    });
    if (!result) {
      return next(new AppError('No country found with name ' + name, 404));
    }
  } else if (iso) {
    result = await country.findOne({
      where: { iso_code: iso }, include: countryIncludes
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