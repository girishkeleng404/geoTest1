const catchAsync = require('../utils/catchError');
const { user, historical_bg, population, nationality, language_religion, age_structure, dependency_ratio, population_rate, urbanization, sex_marriage, health_data, education_data, substance_use_data, environment, government, legal_law_data, government_more, economy, gdp_data, agricultural_and_industrial_data, labor_market_data, household_inco_expe_data, public_finance_debt_data, trade_data, debt_ext_exchange_rate, energy, communication, transportation, military, space, terrorism, transnational_issues, sequelize, Sequelize } = require('../models');
const { country, recursiveSoftDelete } = require('../models');
const AppError = require("../utils/appError");
const { populationService, environmentService, governmentService, economyService, countryIncludes, energyService, communicationService, transportationService, militaryService, spaceService, terrorismService, transnational_issuesService } = require('./service/countryService');
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
  // Insert data
  await populationService(body, newCountry.id);
  await environmentService(body, newCountry.id);
  await governmentService(body, newCountry.id);
  await economyService(body, newCountry.id);
  await energyService(body, newCountry.id);
  await communicationService(body, newCountry.id);
  await transportationService(body, newCountry.id);
  await militaryService(body, newCountry.id)
  await spaceService(body, newCountry.id);
  await terrorismService(body, newCountry.id)
  await transnational_issuesService(body, newCountry.id)




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
          },
          {
            model: substance_use_data,
            as: 'substance_use_data'
          }

        ]
      },
      {
        model: environment,
        as: 'environment_data'
      },
      {
        model: government,
        as: 'government_data',

        include: [
          {
            model: legal_law_data,
            as: 'legal_law_data'
          },
          {
            model: government_more,
            as: 'gov_more'
          }
        ]
      },
      {
        model: economy,
        as: 'economy_data',

        include: [
          {
            model: gdp_data,
            as: 'gdp_data'
          },
          {
            model: agricultural_and_industrial_data,
            as: 'agricultural_and_industrial_data'
          },
          {
            model: labor_market_data,
            as: 'labor_market_data'
          },
          {
            model: household_inco_expe_data,
            as: 'household_inco_expe_data'
          },

          {
            model: public_finance_debt_data,
            as: 'public_finance_debt_data',

          },
          {
            model: trade_data,
            as: 'trade_data'
          },
          {
            model: debt_ext_exchange_rate,
            as: 'debt_ext_exchange_rate',

          }
        ]
      },
      {
        model: energy,
        as: 'energy_data',
      },
      {
        model: communication,
        as: 'communication_data',
      },
      {
        model: transportation,
        as: 'transportation_data'
      },
      {
        model: military,
        as: 'military_data'
      },
      {
        model: space,
        as: 'space_data'
      },
      {
        model: terrorism,
        as: 'terrorism_data'
      },
      {
        model: transnational_issues,
        as: 'transnational_issues_data',
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
    include: countryIncludes,

    //  raw: true,
  });
  //  console.log(result)
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

// ----------------xxxxxxxxxxxxxxxxx------------------




const deleteISO = catchAsync(async (req, res, next) => {
  const { iso_code } = req.query;

  if (!iso_code) {
    return next(new AppError('no iso_code is provided', 400));
  };

  const result = await country.findOne({ where: { iso_code } })

  if (!result) {
    return next(new AppError('No project found with this id', 400));
  }

  await result.destroy({ force: true });


  return res.json({
    status: 'success',
    message: 'Country has been deleted'
  })
})

// ----------------xxxxxxxxxxxxxxxx------------------




// const updateCountry = async (req, res, next) => {
//   const { iso_code } = req.query;
//   const countryData = req.body;

//   const transaction = await sequelize.transaction();

//   try {
//     // Similar update logic with all update operations wrapped in the transaction
//     const countryInstance = await country.findOne({ where: { iso_code }, include: countryIncludes, transaction });

//     // Update country and associated tables here, using the transaction
//     await countryInstance.update(countryData, { transaction });

//     //  if (countryData.background_description) {
//     //   await countryInstance.historical_bg.update({
//     //     background_description: countryData.background_description,
//     //   }, { transaction });
//     // }

//     console.log('Country Data:', countryData);
//     console.log(countryInstance)
//      // Check if historical background exists and update it
//     if (countryData.background_description || countryInstance.historical_bg) {
//       await countryInstance.historical_bg.update({
//         background_description: countryData.background_description,
//       }, { transaction });
//     }  


//     // Commit the transaction if all operations succeed
//     await transaction.commit();

//     return res.status(200).json({ message: 'Country updated successfully' });
//   } catch (error) {
//     // Rollback transaction on failure
//     await transaction.rollback();
//     next(error);
//   }


// };

const updateNestedAssociations = async (instance, data, transaction) => {
  for (const nestedKey in data) {
    if (!instance[nestedKey] || typeof instance[nestedKey] !== 'object') continue;
    if (Array.isArray(instance[nestedKey])) {
      for (let i = 0; i < instance[nestedKey].length; i++) {
        const nestedInstance = instance[nestedKey][i];
        const nestedData = data[nestedKey][i];
        if (nestedInstance && nestedData) {
          await nestedInstance.update(nestedData, { transaction });
        }
      }
    } else {
      await instance[nestedKey].update(data[nestedKey], { transaction });
    }
  }
};


const updateCountry = async (req, res, next) => {
  const { iso_code } = req.query;
  const countryData = req.body;

  const transaction = await sequelize.transaction();

  try {
    // Fetch the country instance along with all associated tables
    const countryInstance = await country.findOne({
      where: { iso_code },
      include: countryIncludes,
      transaction,
    });

    if (!countryInstance) {
      throw new Error(`Country with ISO code ${iso_code} not found`);
    }

    // Update the country table itself
    await countryInstance.update(countryData, { transaction });

    // Iterate over associated tables and update them
    for (const key in countryData) {
      const associatedData = countryData[key]; 

      if (!countryInstance[key] || typeof countryInstance[key] !== 'object') {
        console.log(`${key} is not a valid association`);
        continue;
      }

      if (Array.isArray(countryInstance[key])) {
        for (let i = 0; i < countryInstance[key].length; i++) {
          const associatedInstance = countryInstance[key][i];
          const nestedData = associatedData[i];
          if (associatedInstance && nestedData) {
            await updateNestedAssociations(associatedInstance, nestedData, transaction);
          }
        }
      } else if (associatedData) {
        await countryInstance[key].update(associatedData, { transaction });
      }
    }

    // Commit the transaction
    await transaction.commit();

    return res.status(200).json({ message: 'Country and related data updated successfully' });
  } catch (error) {
    await transaction.rollback();
    next(error);
  }
};



module.exports = { createCountry, getAllCountry, getByQuery, deleteISO, updateCountry };