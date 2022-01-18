const express = require("express");
const AuthenticationController = require("../controllers/AuthenticationController.js");

const router = express.Router();

router.post("/register", AuthenticationController.createAppUser);
router.post("/login", AuthenticationController.login);

module.exports = router;
