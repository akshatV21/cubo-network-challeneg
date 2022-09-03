const { Router } = require("express")
const userRouter = require("./routes/user-router")

const api = Router()

api.use("/user", userRouter)

module.exports = api
