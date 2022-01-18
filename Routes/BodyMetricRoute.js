const express = require("express");
const BodyMetricsController = require("../controllers/BodyMetricController.js");

const router = express.Router();

router.get("/", BodyMetricsController.getBodyMetrics);
router.post("/", BodyMetricsController.addBodyMetric);
router.get("/get-by-username", BodyMetricsController.getBodyMetricByUsername);

module.exports = router;
