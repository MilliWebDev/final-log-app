const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  username: String,
  age : Number,
  email : String,
});



  module.exports = mongoose.model("User", SomeModelSchema);