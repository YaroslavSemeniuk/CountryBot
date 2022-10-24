require('dotenv').config()
const mongoose = require('mongoose')

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION)
  } catch (error) {
    console.log('Failed connect to DB')
    throw Error(error)
  }
}
