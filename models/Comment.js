const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  nick: { type: String, required: true },
  comment: { type: String, required: true },
  accepted: { type: Boolean, required: true },
})

module.exports = mongoose.model("Comment", schema)
