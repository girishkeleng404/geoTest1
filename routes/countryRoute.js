const express = require('express');
const {createCountry, getAllCountry,  getByQuery, deleteISO, updateCountry} = require('../controllers/countryController');
const {authentication} = require('../controllers/authController');
const router = express.Router();

router.route('/')
.post(authentication, createCountry)
.get(authentication, getByQuery)

 


router.route('/getAll')
.get(authentication,getAllCountry);



router.route('/delete').delete(authentication,deleteISO);

router.route('/update').patch(authentication, updateCountry);

 

module.exports = router;