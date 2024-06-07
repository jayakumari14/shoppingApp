const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.set("view engine", "ejs");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});