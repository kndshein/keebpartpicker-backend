const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const keyboardPartsSchema = new Schema({
  PCB: String,
  switch: String,
  keycaps: String,
  case: String,
});

// const keyboardPartsModel = mongoose.model("KeyboardParts", keyboardPartsSchema);
module.exports = keyboardPartsSchema;
