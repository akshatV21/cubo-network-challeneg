const ParticipationModel = require("../models/participation-model")

const httpRegisterNewParticipant = async (req, res) => {
  try {
    const participant = new ParticipationModel(req.participation)
    await participant.save()

    res.status(201).json({ participant })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error saving participant" })
  }
}

const httpGetAllParticipants = async (req, res) => {
  try {
    const participants = await ParticipationModel.find()
    res.status(200).json({ participants })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error getting participant" })
  }
}

module.exports = { httpRegisterNewParticipant, httpGetAllParticipants }
