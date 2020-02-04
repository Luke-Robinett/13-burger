const mysql = require("mysql");

var connection;

/*
if (process.env.JAWSDB_URL) {
 connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection(
  {
   host: "localhost",
   user: 'luke',
   password: 'bootcamp',
   database: 'burger_db'
  }
 );
}
*/
const connection = mysql.createConnection(
 {
  host: "etdq12exrvdjisg6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "vw9qvvtu1un2zkro",
  password: "hf7zkderoddtjlel",
  port: 3306,
  database: "p6xumzulyz0pyrkr"
 }
);
connection.connect(err => {
 if (err) throw err;

 console.log("Connection established. Thread ID " + connection.threadId);
});

module.exports = connection;
