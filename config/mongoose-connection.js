const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/shoppingApp")
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("error in connecting to database", err);
  });

module.exports = mongoose.connection;
