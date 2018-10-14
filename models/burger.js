const orm = require("../config/orm");

let burger = {
  all: cb => {
    orm.selectAll("burger", res => {
      cb(res);
    });
  },
  create: (tableInput, userInput, cb) => {
    orm.insertOne("burger", tableInput, userInput, res => {
      cb(res);
    });
  },
  update: (id, cb) => {
    console.log("Orm Ran")
    orm.updateOne("burger", id, res => {
      cb(res); 
    });
  }
};


//
module.exports = burger;
