const Country = require('../models/countryModel')
const express = require("express");
const axios = require('axios');
const router = express.Router()




const getCountryDetails = router.get('/getCountryDetails', async (req, res) => {

    const { param } = req.query
    console.log(param)
    const options = {
        method: 'GET',
        url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${param}`,

        headers: {
            'X-RapidAPI-Key': `${process.env.API_KEY}`,
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };
    try {

        const response = await axios.request(options);
        const resData = response.data;
        console.log(resData.data.capital);

        const user_id = req.user._id
        //console.log(user_id)




        const country = await Country.create({
            user_id: user_id,
            capital: resData.data.capital,
            code: resData.data.code,
            callingCode: resData.data.callingCode,
            flagImageUri: resData.data.flagImageUri,
            name: resData.data.name,
            numRegions: resData.data.numRegions,

        });
        res.status(200).json(country);
        console.log(country)



    } catch (error) {
        console.error(error);
    }

})

module.exports = { getCountryDetails }