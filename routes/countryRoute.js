const express = require('express');
const {createCountry, getAllCountry,  getByQuery, deleteISO} = require('../controllers/countryController');
const {authentication} = require('../controllers/authController');
const router = express.Router();

router.route('/')
.post(authentication, createCountry)
.get(authentication, getByQuery)
.delete(authentication,deleteISO)
 


router.route('/getAll')
.get(authentication,getAllCountry);


 

 

module.exports = router;