const Country = require('../models/countryModel')
const express = require("express");
const axios = require('axios');
const router = express.Router()

const searchHistory = async (req, res) => {
    const user_id = req.user._id;

    try {
        const searchHistory = await Country.find({ user_id });
        res.status(200).json(searchHistory);

    } catch (error) {

    }
}
module.exports = { searchHistory }