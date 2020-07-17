let express = require("express");

let router = express.Router();

// Import the model (cat.js) to use its database functions.
let burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    console.log("Haylo");
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

module.exports = router;
