const express = require("express");
const router = express.Router();
const controller = require("../controller/authentication.controller");

router.get("/login", controller.Login);

module.exports = router;
