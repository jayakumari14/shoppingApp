const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const db = require("./config/mongoose-connection");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/products", productRouter);
app.use("/user", userRouter);

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}...`);
});
