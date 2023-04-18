const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    placeOfEvent: {
      type: String,
      required: true,
    },
    proposalType: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    From: {
      type: String,
      required: true,
    },
    To: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    foodPreferences: {
      type: String,
      required: true,
    },
    events: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Proposal", proposalSchema);
