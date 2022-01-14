const mongoose = require("mongoose");

const bodyMetricSchema = new mongoose.Schema({
  date: Date,
  username: String,
  weight: Number,
  height: Number,
  waist: Number,
  neck: Number,
  hip: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const BodyMetric = mongoose.model("BodyMetric", bodyMetricSchema);

module.exports = BodyMetric;
