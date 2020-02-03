const orm = require("../config/orm");

const burger = {
 getAll: cb => {
  orm.selectAll(result => {
   cb(result);
  });
 },
 add: (name, cb) => {
  orm.insertOne(name, result => {
   cb(result);
  });
 },
 devour: (burgerId, cb) => {
  orm.updateOne( {id: burgerId, devoured: 1}, result => {
   cb(result);
  });
 }
};

module.exports = burger;
