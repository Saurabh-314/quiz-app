const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
});

const RefreshToken = mongoose.model("tokens", tokenSchema);

module.exports = RefreshToken;