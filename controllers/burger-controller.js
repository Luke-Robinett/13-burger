const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
 burger.getAll(result => {
  console.table(result);
  res.render("index", { burgers: result });
 });
});

router.post("/api/burgers", (req, res) => {
 burger.add(req.body.name, result => {
  res.json({ id: result.insertId });
 });
});

router.put("/api/burgers/:id", (req, res) => {
 burger.devour(req.params.id, result => {
  if (result.changedRows === 0) {
   return res.status(404).end();
  }
  res.status(200).end();
 });
});

module.exports = router;
