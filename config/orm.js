const connection = require("./connection");

const orm = {
 selectAll: cb => {
  const queryText = "select * from burgers";
  connection.query(queryText, (err, result) => {
   if (err) throw err;

   cb(result);
  });
 },
 insertOne: (name, cb) => {
  const queryText = "insert into burgers (name, devoured) values(?, FALSE)";
  const params = [name];
  connection.query(queryText, params, (err, result) => {
   if (err) throw err;

   cb(result);
  })
 },
 updateOne: (burger, cb) => {
  const queryText = "update burgers set devoured = ? where id = ?";
  const params = [burger.devoured, burger.id];
  connection.query(queryText, params, (err, result) => {
   if (err) throw err;

   cb(result);
  })
 }
};

module.exports = orm;
