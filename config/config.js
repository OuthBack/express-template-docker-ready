var express = require("express");
var logger = require("morgan");
const modules = "../src/modules";
const routePath = require("./routes_paths");

var app = express();
require("./middleware")(app, logger, express);
require("./routes_paths")(app);

module.exports = app;
