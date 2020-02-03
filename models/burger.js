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
 devour: (id, cb) => {
  orm.updateOne(id, result => {
   cb(result);
  });
 }
};

module.exports = burger;
