const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to index route");
});

router.post("/register", (req, res) => {
  let { email, fullname, password } = req.body;

  res.send("welcome to index route");
});

module.exports = router;
