const { user, historical_bg, population, nationality, language_religion, age_structure, dependency_ratio, population_rate, urbanization, sex_marriage, health_data, education_data, substance_use_data, environment, government, legal_law_data, government_more, economy, gdp_data, agricultural_and_industrial_data, labor_market_data, household_inco_expe_data, public_finance_debt_data, trade_data, debt_ext_exchange_rate, energy, communication, transportation, military, space, terrorism, transnational_issues } = require('../../models');





const populationService = async (body, countryId) => {

  if (body.total_population) {
    const populationData = await population.create({
      country_id: countryId,
      total_population: body.total_population,
      male_population: body.male_population,
      female_population: body.female_population,
      population_estimate_year: body.population_estimate_year,
      female_comparison_ranking: body.female_comparison_ranking,
      male_comparison_ranking: body.male_comparison_ranking,
      total_comparison_ranking: body.total_comparison_ranking,
    });



    if (body.nationality) {
      await nationality.create({
        population_id: populationData.id,
        nationality: body.nationality,
        ethnic_groups: body.ethnic_groups,
        population_distribution: body.population_distribution,
        demographic_profile: body.demographic_profile,

      })
    };

    if (body.languages) {
      await language_religion.create({
        population_id: populationData.id,
        languages: body.languages,
        major_language_sample: body.major_language_sample,
        notes: body.notes,
        religions: body.religions
      })
    };

    if (body.age_0_14) {
      await age_structure.create({
        population_id: populationData.id,
        age_0_14: body.age_0_14,
        age_15_64: body.age_15_64,
        age_65_plus: body.age_65_plus,
        estimated_year: body.estimated_year
      })
    };
    if (body.total_dependency_ratio) {
      await dependency_ratio.create({
        population_id: populationData.id,
        total_dependency_ratio: body.total_dependency_ratio,
        youth_dependency_ratio: body.youth_dependency_ratio,
        elderly_dependency_ratio: body.elderly_dependency_ratio,
        potential_support_ratio: body.potential_support_ratio,
        dependency_estimated_year: body.dependency_estimated_year
      })
    };
    if (body.population_growth_rate) {

      await population_rate.create({
        population_id: populationData.id,
        population_rate: body.population_rate,
        population_growth_rate_rank: body.population_growth_rate_rank,
        birth_rate: body.birth_rate,
        birth_rate_rank: body.birth_rate_rank,
        death_rate: body.death_rate,
        death_rate_rank: body.death_rate_rank,
        total_fertility_rate: body.total_fertility_rate,
        total_fertility_rate_rank: body.total_fertility_rate_rank,
        gross_reproduction_rate: body.gross_reproduction_rate,
        gross_reproduction_rate_rank: body.gross_reproduction_rate_rank,
        obesity_rate: body.obesity_rate,
        obesity_rate_rank: body.obesity_rate_rank,
        net_migration_rate: body.net_migration_rate,
        net_migration_rate_rank: body.net_migration_rate_rank

      })
    };

    if (body.urban_population) {
      await urbanization.create({
        population_id: populationData.id,
        urban_population: body.urban_population,
        rate_of_urbanization: body.rate_of_urbanization,
        major_urban_areas_population: body.major_urban_areas_population

      })
    };

    if (body.sex_ratio) {
      await sex_marriage.create({
        population_id: populationData.id,
        sex_ratio: body.sex_ratio,
        mother_age_at_first_birth: body.mother_age_at_first_birth,
        currently_married_womens_15to52: body.currently_married_womens_15to52,
        women_married_by_age_15: body.women_married_by_age_15,
        women_married_by_age_18: body.women_married_by_age_18,
        contraceptive_prevalence_rate: body.contraceptive_prevalence_rate
      })
    };

    if (body.current_health_expenditure) {
      await health_data.create({
        population_id: populationData.id,
        current_health_expenditure: body.current_health_expenditure,
        life_expectancy: body.life_expectancy,
        infant_mortality: body.infant_mortality,
        maternal_mortality: body.maternal_mortality,
        physician_density: body.physician_density,
        hospital_bed_density: body.hospital_bed_density,
        drinking_water: body.drinking_water,
        sanitation: body.sanitation,
        major_infectious_diseases: body.major_infectious_diseases,
        adult_obesity: body.adult_obesity,
        underweight_children: body.underweight_children
      })
    };

    if (body.education_expenditure) {
      await education_data.create({
        population_id: populationData.id,
        education_expenditure: body.education_expenditure,
        literacy_rate: body.literacy_rate,
        school_life_expectancy: body.school_life_expectancy
      })
    };

    if (body.alcohol_consumption_p_capita) {
      await substance_use_data.create({
        population_id: populationData.id,
        alcohol_consumption_p_capita: body.alcohol_consumption_p_capita,
        tobacco_use_p_capita: body.tobacco_use_p_capita
      })
    }


  }
}
// -----------------xxxxxxx------------------

const environmentService = async (body, countryId) => {
  if (body.environment) {
    await environment.create({
      country_id: countryId,
      environment: body.environment,
      land_use: body.land_use,
      natural_resource_revenue_data: body.natural_resource_revenue_data,
      pollution_waste_data: body.pollution_waste_data,
      water_resources: body.water_resources
    })
  }
};

// ---------------xxxxxxxxxxx--------------------

const governmentService = async (body, countryId) => {
  if (body.government_type) {
    const governmentTableData = await government.create({
      country_id: countryId,
      government_type: body.government_type,
      country_name: body.country_name,
      capital: body.capital_details,
      administrative_divisions: body.administrative_divisions,
      independence: body.independence,
      national_holiday: body.national_holiday
    })


    if (body.legal_system) {
      await legal_law_data.create({
        government_id: governmentTableData.id,
        legal_system: body.legal_system,
        constitution: body.constitution,
        international_law_organization_participation: body.international_law_organization_participation,
        citizenship: body.citizenship,
        suffrage: body.suffrage,
        executive_branch: body.executive_branch,
        legislative_branch: body.legislative_branch,
        judicial_branch: body.judicial_branch

      })

    }

    if (body.political_parties) {
      await government_more.create({
        government_id: governmentTableData.id,
        judicial_branch: body.judicial_branch,
        political_parties: body.political_parties,
        international_organization_participation: body.international_organization_participation,
        diplomatic_representation: body.diplomatic_representation,
        flag_description: body.flag_description,
        national_symbol: body.national_symbol,
        national_anthem: body.national_anthem,
        national_heritage: body.national_heritage
      })
    }

  };
}



const economyService = async (body, countryId) => {
  if (body.overview) {
    const economyId = await economy.create({
      country_id: countryId,
      overview: body.overview,
      year: body.year
    })



    if (body.gdp_purchasing_power_parity) {
      await gdp_data.create({
        economy_id: economyId.id,
        gdp_purchasing_power_parity: body.gdp_purchasing_power_parity,
        gdp_real_growth_rate: body.gdp_real_growth_rate,
        gdp_per_capita: body.gdp_per_capita,
        gdp_official_exchange_rate: body.gdp_official_exchange_rate,
        infulation_rate: body.infulation_rate,
        cadit_rating: body.cadit_rating,
        gdp_composition_by_sector: body.gdp_composition_by_sector,
        gdp_composition_by_end_use: body.gdp_composition_by_end_use

      });
    }

    if (body.agricultural_products) {
      await agricultural_and_industrial_data.create({
        economy_id: economyId.id,
        agricultural_products: body.agricultural_products,
        industries: body.industries,
        industrial_production_growth_rate: body.industrial_production_growth_rate
      });
    }

    if (body.labor_force_millions) {
      await labor_market_data.create({
        economy_id: economyId.id,
        labor_force_millions: body.labor_force_millions,
        labor_comparison_ranking: body.labor_comparison_ranking,
        unemployment_rate: body.unemployment_rate,
        youth_unemployment_rate: body.youth_unemployment_rate

      })

    };

    if (body.household_inco_year || body.household_income_or_consumption_by_percentage_share) {
      await household_inco_expe_data.create({
        economy_id: economyId.id,
        year: body.household_inco_year,
        average_household_expenditures: body.average_household_expenditures,
        household_income_or_consumption_by_percentage_share: body.household_income_or_consumption_by_percentage_share,
        remittances: body.remittances
      })

    };

    if (body.public_finance_debt_data_year) {
      await public_finance_debt_data.create({
        economy_id: economyId.id,
        year: body.public_finance_debt_data_year,
        revenues_billion: body.revenues_billion,
        expenditures_billion: body.expenditures_billion,
        public_debt_percentage_gdp: body.public_debt_percentage_gdp,
        taxes_percentage_gdp: body.taxes_percentage_gdp,
        taxes_comparison_ranking: body.taxes_comparison_ranking
      })
    };

    if (body.exports_billion || body.imports_billion) {
      await trade_data.create({
        economy_id: economyId.id,
        exports_billion: body.exports_billion,
        imports_billion: body.imports_billion,
        exports_comparison_ranking: body.exports_comparison_ranking,
        imports_comparison_ranking: body.imports_comparison_ranking,
        top_export_partners: body.top_export_partners,
        top_import_partners: body.top_import_partners,
        top_export_commodities: body.top_export_commodities,
        top_import_commodities: body.top_import_commodities,
        current_account_balance_billion: body.current_account_balance_billion,
        reserves_of_foreign_exchange_gold_billion: body.reserves_of_foreign_exchange_gold_billion
      })

    };

    if (body.debt_external_billion_usd) {
      await debt_ext_exchange_rate.create({
        economy_id: economyId.id,
        debt_external_billion_usd: body.debt_external_billion_usd,
        exchange_rate: body.exchange_rate
      })
    }

  }
};

// --------xxxxxxxxxxxxxxxxx--------------------

const energyService = async (body, countryId) => {

  if (body.electricity_access || body.electricity_generation_sources || body.nuclear_energy) {
    await energy.create({
      country_id: countryId,
      energy_consumption_per_capita_in_million: body.energy_consumption_per_capita_in_million,
      electricity_access: body.electricity_access,
      electricity: body.electricity,
      electricity_generation_sources: body.electricity_generation_sources,
      nuclear_energy: body.nuclear_energy,
      coal: body.coal,
      petroleum: body.petroleum,
      natural_gas: body.natural_gas,
      carbon_dioxide_emission: body.carbon_dioxide_emission

    });
  }
};

// -----------xxxxxxxxxx--------------


const communicationService = async (body, countryId) => {
  if (body.telephone_subscription_in_millions) {
    await communication.create({
      country_id: countryId,
      telephone_subscription_in_millions: body.telephone_subscription_in_millions,
      telephone_subscription_per_100: body.telephone_subscription_per_100,
      mobile_subscription_in_millions: body.mobile_subscription_in_millions,
      mobile_subscription_per_100: body.mobile_subscription_per_100,
      mobile_subscription_ranking: body.mobile_subscription_ranking,
      telecommunication_system: body.telecommunication_system,
      broadcast_media: body.broadcast_media,
      internet_country_code: body.internet_country_code,
      internet_users_in_millions: body.internet_users_in_millions,
      internet_users_percentage: body.internet_users_percentage,
      internet_users_ranking: body.internet_users_ranking,
      broadband_subscription_in_millions: body.broadband_subscription_in_millions
    })
  }
};

// -------------------xxxxxx-------------------

const transportationService = async (body, countryId) => {
  if (body.pipelines || body.railway_total_length_km) {
    await transportation.create({
      country_id: countryId,
      pipelines: body.pipelines,
      railway_total_length_km: body.railway_total_length_km,
      railway_comparison_ranking: body.railway_comparison_ranking,
      roadway_length_total_km: body.roadway_length_total_km,
      roadway_comparison_ranking: body.roadway_comparison_ranking,

    })
  }
};

// --------------------xxxxxxxxxxx--------------------

const militaryService = async (body, countryId) => {
  if (body.military_overview) {
    await military.create({
      country_id: countryId,
      military_overview: body.military_overview,
      military_branches: body.military_branches,
      military_expenditure_of_GDP_percentage: body.military_expenditure_of_GDP_percentage,
      military_security_service_personnel_strength: body.military_security_service_personnel_strength,
      military_equipment_inventories_and_acquisitions: body.military_equipment_inventories_and_acquisitions,
      military_service_age_and_obligation: body.military_service_age_and_obligation,
      military_deployment: body.military_deployment
    })
  }
}

// ------------------xxxxxx--------------------

const spaceService = async (body, countryId) => {
  if (body.space_program_overview) {
    await space.create({
      country_id: countryId,
      space_program_overview: body.space_program_overview,
      space_agencies: body.space_agencies,
      space_launch_site: body.space_launch_site
    })
  }
};

// --------------------xxxxxxxxxxxxxxxxxx----------------------

const terrorismService = async (body, countryId) => {
  if (body.terrorist_groups) {
    await terrorism.create({
      country_id: countryId,
      terrorist_groups: body.terrorist_groups,
      notes: body.terr_notes,
    })
  }
}

// -----------------xxxxxxxxxxxxxx-------------------------

const transnational_issuesService = async (body, countryId) => {
  if (body.illicit_drugs || body.refugees_IDPs) {
    await transnational_issues.create({
      country_id: countryId,
      refugees_IDPs: body.refugees_IDPs,
      illicit_drugs: body.illicit_drugs,
    })

  }
}

// ----------------------xxxxxxxxx-------------------------

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
        attributes: { exclude: ['population_id', 'createdAt', 'updatedAt', 'deletedAt'] }
      },
      {
        model: sex_marriage,
        as: 'sex_marriage_Data',
        attributes: { exclude: ['id', 'population_id', 'createdAt', 'updatedAt', 'deletedAt'] }
      },
      {
        model: health_data,
        as: 'health_data',
        attributes: { exclude: ['id', 'population_id', 'createdAt', 'updatedAt', 'deletedAt'] }
      },
      {
        model: education_data,
        as: 'education_data',
        attributes: { exclude: ['id', 'population_id', 'createdAt', 'updatedAt', 'deletedAt'] }
      },
      {
        model: substance_use_data,
        as: 'substance_use_data',
        attributes: { exclude: ['id', 'population_id', 'createdAt', 'updatedAt', 'deletedAt'] }
      }
    ]
  },
  {
    model: environment,
    as: 'environment_data',
    attributes: { exclude: ['id', 'country_id', 'createdAt', 'updatedAt', 'deletedAt'] }
  },
  {
    model: government,
    as: 'government_data',
    attributes: { exclude: ['id', 'country_id', 'createdAt', 'updatedAt', 'deletedAt'] },

    include: [
      {
        model: legal_law_data,
        as: 'legal_law_data',
        attributes: { exclude: ['id', 'government_id', 'createdAt', 'updatedAt', 'deletedAt'] },
      }, {
        model: government_more,
        as: 'gov_more',
        attributes: { exclude: ['id', 'government_id', 'createdAt', 'updatedAt', 'deletedAt'] },

      }
    ]
  },
  {
    model: economy,
    as: 'economy_data',
    attributes: { exclude: ['id', 'country_id', 'createdAt', 'updatedAt', 'deletedAt'] },

    include: [

      {
        model: gdp_data,
        as: 'gdp_data',
        attributes: { exclude: ['id', 'economy_id', 'createdAt', 'updatedAt', 'deletedAt'] },
      },
      {
        model: agricultural_and_industrial_data,
        as: 'agricultural_and_industrial_data',
        attributes: { exclude: ['id', 'economy_id', 'createdAt', 'updatedAt', 'deletedAt'] },

      },
      {
        model: labor_market_data,
        as: 'labor_market_data',
        attributes: { exclude: ['id', 'economy_id', 'createdAt', 'updatedAt', 'deletedAt'] },

      },
      {
        model: household_inco_expe_data,
        as: 'household_inco_expe_data',
        attributes: { exclude: ['id', 'economy_id', 'createdAt', 'updatedAt', 'deletedAt'] },

      },

      {
        model: public_finance_debt_data,
        as: 'public_finance_debt_data',
        attributes: { exclude: ['id', 'economy_id', 'createdAt', 'updatedAt', 'deletedAt'] },

      },
      {
        model: trade_data,
        as: 'trade_data',
        attributes: { exclude: ['id', 'economy_id', 'createdAt', 'updatedAt', 'deletedAt'] },
      },

      {
        model: debt_ext_exchange_rate,
        as: 'debt_ext_exchange_rate',
        attributes: { exclude: ['id', 'economy_id', 'createdAt', 'updatedAt', 'deletedAt'] },
      }



    ]
  },

  {
    model: energy,
    as: 'energy_data',
    attributes: { exclude: ['id', 'country_id', 'createdAt', 'updatedAt', 'deletedAt'] },
  },
  {
    model: communication,
    as: 'communication_data',
    attributes: { exclude: ['id', 'country_id', 'createdAt', 'updatedAt', 'deletedAt'] },
  },
  {
    model: transportation,
    as: 'transportation_data',
    attributes: { exclude: ['id', 'country_id', 'createdAt', 'updatedAt', 'deletedAt'] },
  },
  {
    model: military,
    as: 'military_data',
    attributes: { exclude: ['id', 'country_id', 'createdAt', 'updatedAt', 'deletedAt'] },
  },
  {
    model: space,
    as: 'space_data',
    attributes: { exclude: ['id', 'country_id', 'createdAt', 'updatedAt', 'deletedAt'] },
  },
  {
    model: terrorism,
    as: 'terrorism_data',
    attributes: { exclude: ['id', 'country_id', 'createdAt', 'updatedAt', 'deletedAt'] },

  },
  {
    model: transnational_issues,
    as: 'transnational_issues_data',
    attributes: { exclude: ['id', 'country_id', 'createdAt', 'updatedAt', 'deletedAt'] },
  }
];




module.exports = { populationService, environmentService, governmentService, economyService, countryIncludes, energyService, communicationService, transportationService, militaryService, spaceService, terrorismService, transnational_issuesService };