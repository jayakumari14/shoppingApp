const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config");

mongoose
  .connect(`${config.get("MONGODB_URI")}/shoppingApp`)
  .then(() => {
    dbgr("connected to database");
  })
  .catch((err) => {
    dbgr("error in connecting to database", err);
  });

module.exports = mongoose.connection;
