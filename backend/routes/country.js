const express = require('express');

const { getCountryDetails } = require('../controllers/countryController')
const router = express.Router()

//country details
router.get('/getCountryDetails', getCountryDetails)


module.exports = router