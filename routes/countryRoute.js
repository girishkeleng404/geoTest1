const express = require('express');
const {createCountry,getAllCountry} = require('../controllers/countryController');
const {authentication} = require('../controllers/authController');
const router = express.Router();

router.route('/')
.post(authentication, createCountry);
router.route('/getAll')
.get(authentication,getAllCountry);


module.exports = router;