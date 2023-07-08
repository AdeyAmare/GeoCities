const mongoose = require('mongoose')

const Schema = mongoose.Schema

const countrySchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    callingCode: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    numRegions: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('Country', countrySchema)