const mongoose = require("mongoose");

const linkSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  link: { type: String, required: true },
});

module.exports = mongoose.model("Link", linkSchema);
