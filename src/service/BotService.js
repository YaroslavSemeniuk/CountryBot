const _ = require('lodash')
const { prettify } = require('../phrases')
const CountryService = require('./CountryService')

class BotService {
  async getCountiesList() {
    const { result } = await CountryService.getAll()

    let firstPart = ''
    let secondPart = ''

    _.map(result.slice(0, Math.floor(result.length / 2)), (country) => {
      firstPart += prettify({ ...country, location: null })
    })
    _.map(
      result.slice(Math.ceil(result.length / 2), result.length),
      (country) => {
        secondPart += prettify({ ...country, location: null })
      }
    )

    return { firstPart, secondPart }
  }

  async findCountry(searchWord) {
    return (await CountryService.find(searchWord)).result
  }
}

module.exports = new BotService()
