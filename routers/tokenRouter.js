const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const secret = "key";

router.get("/sign/:data", (req, res) => {
  const token = jwt.sign(req.params.data, secret);
  console.log("token", token);
  res.json({ message: "ok" });
});

router.get("/verify/:data", (req, res) => {
  const data = jwt.verify(req.params.data, secret);
  console.log("data", data);
  res.json({ message: "ok" });
});

module.exports = router;
