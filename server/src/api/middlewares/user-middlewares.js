const validateUserRequest = (req, res, next) => {
  if (!req.body.firstName) return res.status(400).json({ error: "Please provide first name" })
  if (!req.body.lastName) return res.status(400).json({ error: "Please provide last name" })
  if (!req.body.participation) return res.status(400).json({ error: "Please provide participation" })

  req.participation = { firstName: req.body.firstName, lastName: req.body.lastName, participation: req.body.participation }
  next()
}

module.exports = { validateUserRequest }
