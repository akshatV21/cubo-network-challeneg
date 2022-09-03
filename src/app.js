const express = require("express")
const cors = require("cors")
const path = require("path")
const morgan = require("morgan")
const api = require("./api/api")

const app = express()

// middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static(path.join(__dirname, "..", "public")))

// router
app.use("/api", api)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"))
})

module.exports = app
