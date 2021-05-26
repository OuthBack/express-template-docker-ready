require("dotenv").config({ path: "./.env." + process.env.NODE_ENV });
let app = require("./config/config.js");

module.exports = app;
