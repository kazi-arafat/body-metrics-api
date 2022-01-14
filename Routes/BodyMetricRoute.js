const express = require("express");
const BodyMetricsController = require("../controllers/BodyMetricController.js");

const router = express.Router();

router.get("/", BodyMetricsController.getBodyMetrics);
router.post("/", BodyMetricsController.addBodyMetric);

module.exports = router;
