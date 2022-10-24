const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const countryModel = new Schema({
  country: String,
  capital: String,
  location: String,
})

const CountryModel = mongoose.model('Country', countryModel)

module.exports = CountryModel
