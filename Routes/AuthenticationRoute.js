const express = require("express");
const BodyMetricsController = require("../controllers/AuthenticationController.js");

const router = express.Router();

router.post("/", BodyMetricsController.createAppUser);

module.exports = router;
