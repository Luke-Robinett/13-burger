const mysql = require("mysql");

const connection = mysql.createConnection(
 {
  host: "localhost",
  user: 'luke',
  password: 'bootcamp',
  database: 'burger_db'
 }
);

connection.connect(err => {
 if (err) throw err;

 console.log("Connection established. Thread ID " + connection.threadId);
});

module.exports = connection;
