const glob = require("glob");
const path = require("path");
const chalk = require("chalk");

module.exports = (app) => {
  /** Load the Routes */
  console.log("routes are", chalk.yellow("loading ..."));
  let routePath = "src/modules/**/routes/*.routes.js";
  glob.sync(routePath).forEach((file) => {
    try {
      const filePath = file.split("/");
      const route = `${process.env.API_VERSION}/${filePath[2]}`;
      app.use(route, require(`../${file}`));
      console.log(`${chalk.red("----")} ${file} ${chalk.green("is loaded")}`);
      console.log(
        `${chalk.red("----")} ${chalk.yellow(route)} is ${chalk.green(
          "ready"
        )} \n`
      );
    } catch (error) {
      console.log(`Error on ${file}`);
      throw error;
    }
  });
  console.log("routes are", chalk.green("loaded"));
};
