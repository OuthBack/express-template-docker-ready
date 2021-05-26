const cookieParser = require("cookie-parser");
const path = require("path");
const chalk = require("chalk");

module.exports = (app, logger, express) => {
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));

  console.log("middleware", chalk.green("is loaded"));
};
