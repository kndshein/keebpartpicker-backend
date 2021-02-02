const mongoose = require("../db/connection");
const keyboardPartsSchema = require("../models/KeyboardParts");
const Schema = mongoose.Schema;

const keyboardSchema = new Schema({
  name: String,
  type: String,
  parts: keyboardPartsSchema,
});

const keyboardModel = mongoose.model("Keyboard", keyboardSchema);
module.exports = keyboardModel;
