const { Schema, model } = require("mongoose")

const participationSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    participation: { type: String, required: true },
  },
  { timestamps: true }
)

const ParticipationModel = model("user", participationSchema)

module.exports = ParticipationModel
