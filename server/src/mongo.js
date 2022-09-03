require("dotenv").config()
const mongoose = require("mongoose")

const connectToMongo = async () => {
  await mongoose.connect(process.env.MONGO_URL)
}

module.exports = { connectToMongo }
