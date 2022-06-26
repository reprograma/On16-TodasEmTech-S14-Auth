const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    versionKey: false,
  }
);

const users = mongoose.model("user", usersSchema);

module.exports = users;
