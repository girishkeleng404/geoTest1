const catchAsync = require('../utils/catchError');
const { user, historical_bg, population, nationality,language_religion,age_structure, dependency_ratio } = require('../models');
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

  if (body.background_description || body.total_population || body.nationality || body.languages|| body.age_0_14 || body.total_dependency_ratio) {

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


    if (body.nationality) {
      await nationality.create({
        country_id: newCountry.id,
        nationality: body.nationality,
        ethnic_groups: body.ethnic_groups,
        population_distribution: body.population_distribution,
        demographic_profile: body.demographic_profile,

      })
    };

    if(body.languages){
      await language_religion.create({
        country_id: newCountry.id,
        languages: body.languages,
        major_language_sample:body.major_language_sample,
        notes:body.notes,
        religions:body. religions
      })
    };

    if(body.age_0_14){
      await age_structure.create({
        country_id:newCountry.id,
        age_0_14:body.age_0_14,
        age_15_64:body.age_15_64,
        age_65_plus:body.age_65_plus,
        estimated_year:body.estimated_year
      })
    };
    if(body.total_dependency_ratio){
      await dependency_ratio.create({
        country_id:newCountry.id,
        total_dependency_ratio:body.total_dependency_ratio,
        youth_dependency_ratio:body.youth_dependency_ratio,
        elderly_dependency_ratio:body.elderly_dependency_ratio,
        potential_support_ratio:body.potential_support_ratio,
        dependency_estimated_year:body.dependency_estimated_year
      })
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
        as: 'populationData',

        include: [
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
            as:'age_structure'
          },
          {
            model: dependency_ratio,
            as:'dependency_ratio'
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
        attributes: ['total_population', 'male_population', 'female_population', 'population_estimate_year', 'female_comparison_ranking', 'male_comparison_ranking', 'total_comparison_ranking'],

        include: [
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
            attributes:['age_0_14','age_15_64','age_65_plus','estimated_year']
          },
          {
            model: dependency_ratio,
            as: 'dependency_ratio',
            attributes:['total_dependency_ratio','youth_dependency_ratio','elderly_dependency_ratio','potential_support_ratio','dependency_estimated_year']
          }

        ]

      }

    ]
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
    result = await country.findOne({
      where: { name: name }, include: [
        {
          model: historical_bg,
          as: 'history', // alias for querying
          attributes: ['background_description']
        },
        {
          model: population,
          as: 'populationData',
          attributes: ['total_population', 'male_population', 'female_population', 'population_estimate_year', 'female_comparison_ranking', 'male_comparison_ranking', 'total_comparison_ranking']
        }

      ]
    });
    if (!result) {
      return next(new AppError('No country found with name ' + name, 404));
    }
  } else if (iso) {
    result = await country.findOne({
      where: { iso_code: iso }, include: [
        {
          model: historical_bg,
          as: 'history', // alias for querying
          attributes: ['background_description']
        },
        {
          model: population,
          as: 'populationData',
          attributes: ['total_population', 'male_population', 'female_population', 'population_estimate_year', 'female_comparison_ranking', 'male_comparison_ranking', 'total_comparison_ranking']
        }

      ]
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