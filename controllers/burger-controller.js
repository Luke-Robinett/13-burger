const express = require("express");
const burger = require("../models/burger");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/burgers", (req, res) => {
 burger.getAll(result => {
  res.json(result);
 });
});

app.listen(PORT, err => {
 if (err) throw err;
 console.log("Listening on port " + PORT);
});

module.exports = app;
