const mongoose = require('mongoose')

const Schema = mongoose.Schema

const countrySchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },

    capital: {
        type: String
    },
    code: {
        type: String,
    },
    callingCode: {
        type: String,

    },
    flagImageUri: {
        type: String
    },
    name: {
        type: String,
    },
    numRegions: {
        type: Number,
    }
})

module.exports = mongoose.model('Country', countrySchema)