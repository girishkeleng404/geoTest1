const catchAsync = require("../../utils/catchError");
const appError = require("../../utils/appError");
const db = require("../../models");
const { country, population } = db;
const { Op, where } = require("sequelize");

const getCountriesByPopulation = catchAsync(async (req, res, next) => {
  const {
    minPopulation,
    maxPopulation,
    limit = 10,
    top,
    sortOrder = "desc",
    offset = 0, // Use offset for skipping results
  } = req.query;

  const populationFilter = {};
  if (minPopulation) populationFilter[Op.gte] = minPopulation.toString();
  if (maxPopulation) populationFilter[Op.lte] = maxPopulation.toString();
  console.log(populationFilter);
  console.log(minPopulation, maxPopulation, limit, sortOrder);
  try {
    const countries = await country.findAll({
      attributes: {
        exclude: [
          "createdBy",
          "population_id",
          "createdAt",
          "updatedAt",
          "deletedAt",
        ],
      },
      include: [
        {
          model: population,
          as: "populationData",

          attributes: {
            exclude: ["id", "createdAt", "updatedAt", "deletedAt"],
          },
          where: {
            total_population: populationFilter,
          },
        },
      ],

      order: [
        [
          { model: population, as: "populationData" },
          "total_population",
          sortOrder.toUpperCase(),
        ],
      ],
      limit: parseInt(top || limit, 10),
      offset: parseInt(offset, 10), // Apply offset for range queries
    });

    res.json(countries);
  } catch (error) {
    console.error("Error retrieving countries:", error);
    res.status(500).json({ error: "Faild to retrieve countries" });
  }
});

module.exports = getCountriesByPopulation;
