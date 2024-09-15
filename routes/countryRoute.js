const express = require('express');
const createCountry = require('../controllers/countryController');
const router = express.Router();

router.route('/').post(createCountry);

module.exports = router;