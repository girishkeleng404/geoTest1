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
    sortOrder = "desc",
  } = req.query;

  const tp = 1409128297;
  const populationFilter = {};
  if (minPopulation) populationFilter[Op.gte] = minPopulation.toString();
  if (maxPopulation) populationFilter[Op.lte] = maxPopulation.toString();
  console.log(populationFilter);
  console.log(minPopulation, maxPopulation, limit, sortOrder);
  try {
    const countries = await country.findAll({
      include: [
        {
          model: population,
          as: "populationData",
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
      limit: parseInt(limit, 10),
    });

    res.json(countries);

    /* const popuRes = await population.findAll({
      where: {
        total_population: {
          [Op.lte]: tp.toString(), // or another operator like Op.lte for less than
        },
      },
    });

    res.json(popuRes); */
  } catch (error) {
    console.error("Error retrieving countries:", error);
    res.status(500).json({ error: "Faild to retrieve countries" });
  }
});

module.exports = getCountriesByPopulation;
