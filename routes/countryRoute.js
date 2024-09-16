const express = require('express');
const {createCountry, getAllCountry, getByIso, getByName } = require('../controllers/countryController');
const {authentication} = require('../controllers/authController');
const router = express.Router();

router.route('/')
.post(authentication, createCountry);
router.route('/getAll')
.get(authentication,getAllCountry);


router.route('/:iso').get(authentication,getByIso);

router.route('/:name').get(authentication,getByName);

module.exports = router;