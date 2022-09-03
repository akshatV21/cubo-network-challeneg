const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

// middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// router

module.exports = app
