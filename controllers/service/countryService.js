const { population, nationality,language_religion,age_structure, dependency_ratio,population_rate, urbanization,sex_marriage,health_data, education_data,substance_use_data,environment,government } = require('../../models');
 
 


const populationService = async(body,countryId)=> {
    
    if (body.total_population) {
        const populationData =  await population.create({
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
    
        if(body.languages){
          await language_religion.create({
            population_id: populationData.id,
            languages: body.languages,
            major_language_sample:body.major_language_sample,
            notes:body.notes,
            religions:body. religions
          })
        };
    
        if(body.age_0_14){
          await age_structure.create({
            population_id: populationData.id,
            age_0_14:body.age_0_14,
            age_15_64:body.age_15_64,
            age_65_plus:body.age_65_plus,
            estimated_year:body.estimated_year
          })
        };
        if(body.total_dependency_ratio){
          await dependency_ratio.create({
            population_id: populationData.id,
            total_dependency_ratio:body.total_dependency_ratio,
            youth_dependency_ratio:body.youth_dependency_ratio,
            elderly_dependency_ratio:body.elderly_dependency_ratio,
            potential_support_ratio:body.potential_support_ratio,
            dependency_estimated_year:body.dependency_estimated_year
          })
        };
        if(body.population_growth_rate){
          
          await population_rate.create({
            population_id: populationData.id,
            population_rate: body.population_rate,
            population_growth_rate_rank:body. population_growth_rate_rank,
            birth_rate:body.birth_rate,
            birth_rate_rank:body.birth_rate_rank,
            death_rate:body.death_rate,
            death_rate_rank:body.death_rate_rank,
            total_fertility_rate:body.total_fertility_rate,
            total_fertility_rate_rank:body.total_fertility_rate_rank,
            gross_reproduction_rate:body.gross_reproduction_rate,
            gross_reproduction_rate_rank:body.gross_reproduction_rate_rank,
            obesity_rate:body.obesity_rate,
            obesity_rate_rank:body.obesity_rate_rank,
            net_migration_rate:body.net_migration_rate,
            net_migration_rate_rank:body.net_migration_rate_rank
    
          })
        };
    
        if(body.urban_population){
          await urbanization.create({
            population_id: populationData.id,
            urban_population:body.urban_population,
            rate_of_urbanization:body.rate_of_urbanization,
            major_urban_areas_population:body.major_urban_areas_population
    
          })
        };
        
        if(body.sex_ratio){
          await sex_marriage.create({
            population_id: populationData.id,
            sex_ratio:body.sex_ratio,
            mother_age_at_first_birth:body.mother_age_at_first_birth,
            currently_married_womens_15to52:body.currently_married_womens_15to52,
            women_married_by_age_15:body.women_married_by_age_15,
            women_married_by_age_18:body.women_married_by_age_18,
            contraceptive_prevalence_rate:body.contraceptive_prevalence_rate
          })
        };
    
        if(body.current_health_expenditure){
          await health_data.create({
            population_id: populationData.id,
            current_health_expenditure:body.current_health_expenditure,
            life_expectancy:body.life_expectancy,
            infant_mortality:body.infant_mortality,
            maternal_mortality:body.maternal_mortality,
            physician_density:body.physician_density,
            hospital_bed_density:body.hospital_bed_density,
            drinking_water:body.drinking_water,
            sanitation:body.sanitation,
            major_infectious_diseases:body.major_infectious_diseases,
            adult_obesity:body.adult_obesity,
            underweight_children:body.underweight_children
          })
        };
        
        if(body.education_expenditure){
          await education_data.create({
            population_id: populationData.id,
            education_expenditure:body.education_expenditure,
            literacy_rate:body.literacy_rate,
            school_life_expectancy:body.school_life_expectancy
          })
        };

        if(body.alcohol_consumption_p_capita){
            await substance_use_data.create({
                population_id: populationData.id,
                alcohol_consumption_p_capita:body.alcohol_consumption_p_capita,
                tobacco_use_p_capita:body.tobacco_use_p_capita
            })
        }


      }
}


const environmentService = async(body,countryId)=> {
  if(body.environment){
    await environment.create({
      country_id: countryId,
      environment: body.environment,
      land_use: body.land_use,
      natural_resource_revenue_data: body.natural_resource_revenue_data,
      pollution_waste_data: body.pollution_waste_data,
      water_resources: body.water_resources
  })
}};


const governmentService = async(body,countryId)=> {
  if(body.government_type){
    await government.create({
      country_id: countryId,
      government_type: body.government_type,
      country_name:body.country_name,
      capital: body.capital_details,
      administrative_divisions:body.administrative_divisions,
      independence:body.independence,
      national_holiday:body.national_holiday
    })
  }
}



module.exports ={populationService, environmentService,governmentService}