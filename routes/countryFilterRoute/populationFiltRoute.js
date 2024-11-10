const express = require("express");
const route = express.Router();
const { authentication } = require("../../controllers/authController");
const router = require("../countryRoute");
const getCountriesByPopulation = require("../../controllers/contryFilterController/populationFiltContr.js");

router.route("/population").get(authentication, getCountriesByPopulation);

module.exports = router;
