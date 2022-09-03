const { Router } = require("express")
const { httpRegisterNewParticipant, httpGetAllParticipants } = require("../controllers/user-controller")
const { validateUserRequest } = require("../middlewares/user-middlewares")

const userRouter = Router()

userRouter.post("/new", validateUserRequest, httpRegisterNewParticipant)

userRouter.get("/all", httpGetAllParticipants)

module.exports = userRouter
