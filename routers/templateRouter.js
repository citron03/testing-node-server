const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("test", { name: "park kim lee" });
});

module.exports = router;
