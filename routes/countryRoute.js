const express = require('express');
const createCountry = require('../controllers/countryController');
const {authentication} = require('../controllers/authController');
const router = express.Router();

router.route('/').post(authentication, createCountry);

module.exports = router;