const express = require('express');
const {createCountry, getAllCountry,  getByQuery} = require('../controllers/countryController');
const {authentication} = require('../controllers/authController');
const router = express.Router();

router.route('/')
.post(authentication, createCountry)
.get(authentication, getByQuery)
 


router.route('/getAll')
.get(authentication,getAllCountry);


 

 

module.exports = router;