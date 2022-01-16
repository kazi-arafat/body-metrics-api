const express = require("express");
const BodyMetricsController = require("../controllers/AuthenticationController.js");

const router = express.Router();

router.post("/register", BodyMetricsController.createAppUser);

module.exports = router;
