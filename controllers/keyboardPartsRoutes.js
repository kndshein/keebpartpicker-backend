const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");

const keyboardPartsModel = require("../models/KeyboardParts");

router.get("/", async (req, res) => {
  keyboardPartsModel
    .find({})
    .then((allKeyboardParts) => {
      res.json({
        status: 200,
        keyboardParts: allKeyboardParts,
      });
    })
    .catch((err) => res.json({ status: 400, err: err }));
});

module.exports = router;
