const Country = require("../models/countryDetailsModel")
const express = require("express");
const axios = require('axios');
const router = express.Router()

const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/US',
    headers: {
        'X-RapidAPI-Key': `${process.env.API_KEY}`,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

const getCountryDetails = router.get('/getCountryDetails', async (req, res) => {

    try {
        const response = await axios.request(options);
        Country.insertMany(response.data);
        res.send(response.data);
        //console.log(response.data);
    } catch (error) {
        console.error(error);
    }

})

module.exports = { getCountryDetails }
