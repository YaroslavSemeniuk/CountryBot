const CountryModel = require('../model/CountryModel')

class CountryService {
  async getAll() {
    const countries = await CountryModel.find({})
      .collation({ locale: 'uk' })
      .sort({ country: 1 })
      .lean()
    return { result: countries }
  }

  async find(word) {
    return {
      result: await CountryModel.find(
        { $text: { $search: `"${word}"` } },
        { _id: 0, __v: 0 }
      ).lean(),
    }
  }
}

module.exports = new CountryService()
