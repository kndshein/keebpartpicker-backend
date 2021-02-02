const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const keyboardSchema = new Schema({
  name: String,
  type: String,
  parts: [
    {
      type: Schema.Types.ObjectId,
      ref: "KeyboardParts",
    },
  ],
});

const keyboardModel = mongoose.model("Keyboard", keyboardSchema);
module.exports = keyboardModel;
