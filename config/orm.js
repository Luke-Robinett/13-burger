const connection = require("./connection");

const orm = {
 selectAll: cb => {
  const queryText = "select * from burgers";
  connection.query(queryText, (err, result) => {
   if (err) throw err;

   console.log(queryText);
   console.table(result);
   cb(result);
  });
 },
 insertOne: (burgerName, cb) => {
  const queryText = "insert into burgers (name) ?";
  const params = [burgerName];
  connection.query(queryText, params, (err, result) => {
   if (err) throw err;

   console.log(`Inserted ${result.affectedRows} row(s)`);
   cb(result);
  })
 },
 updateOne: (burger, cb) => {
  const queryText = "update burgers set name = ?, devoured = ? where id = ?";
  const params = [burger.name, burger.devoured, burger.id];
  connection.query(queryText, params, (err, result) => {
   if (err) throw err;

   console.log(`Updated ${result.affectedRows} row(s)`);
   cb(result);
  })
 }
};

module.exports = orm;
