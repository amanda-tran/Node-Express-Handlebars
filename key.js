console.log("Connected Key.js");
console.log("Testing upload running");

require("dotenv").config({ path: "./.env" });



exports.clearDB = {
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};
