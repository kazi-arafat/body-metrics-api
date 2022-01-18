const BodyMetric = require("../models/BodyMetric.js");

exports.getBodyMetrics = async function (req, res) {
  try {
    const bodyMetrics = await BodyMetric.find();
    res.status(200).json(bodyMetrics);
  } catch (error) {
    console.log(error.message);
    res.status(512).send("Error in getting data from server");
  }
};

exports.addBodyMetric = async function (req, res) {
  const newBodyMetric = BodyMetric(req.body);
  console.log(`New Body metric add ${req.body}`);
  try {
    await newBodyMetric.save();
    //res.status(201).send("Successfully added to database!");
    res.status(201).json(newBodyMetric);
  } catch (error) {
    console.error(error.message);
    res.status(512).send("Not added! See error logs.");
  }
};

exports.getBodyMetricByUsername = async function (req, res) {
  const username = req.body.username;
  try {
    const bodyMetrics = await BodyMetric.find({ username: username });
    res.status(200).json(bodyMetrics);
  } catch (error) {
    console.log(error.message);
  }
};
