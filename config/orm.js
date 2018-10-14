// const connection = require("../config/connection.js");
let connection = require("../config/connnection");

let orm = {
  selectAll: (tableInput, cb) => {
    let queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: (database, tableInput, userInput, cb) => {
    let queryString = `INSERT INTO ${database} (${tableInput}) VALUE ("${userInput}")`;
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result); 
    });
  },
  updateOne: (tableInput, id, cb) => {
    // console.log("Update Ran")
    // console.log(`${tableInput} ${id.id}`)
    let queryString = `UPDATE ${tableInput} SET devoured=1 WHERE ${id.id};`; 
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result); 
    });
  }
  
};

module.exports = orm;
