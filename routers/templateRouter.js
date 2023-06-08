const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("hello.ejs", { names: ["lee", "park", "korea"] });
});

module.exports = router;
