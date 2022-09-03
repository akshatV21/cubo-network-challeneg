const app = require("./app")
const { connectToMongo } = require("./mongo")

const PORT = process.env.PORT || 8080

const startServer = async () => {
  await connectToMongo()
  app.listen(PORT, () => console.log(`listening to requests on port ${PORT}`))
}

startServer()
