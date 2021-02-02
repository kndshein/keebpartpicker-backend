const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");

const keyboardModel = require("../models/Keyboard");

////// Route to list all keyboards
router.get("/", async (req, res) => {
  keyboardModel
    .find({})
    .then((allKeyboards) => {
      res.json({
        status: 200,
        keyboardParts: allKeyboards,
      });
    })
    .catch((err) => res.json({ status: 400, err: err }));
});

////// Route to create a keyboard
router.post("/", async (req, res) => {
  keyboardModel.create({
    name: req.body.name,
    type: req.body.type,
    parts: {
      PCB: req.body.PCB,
      Switch: req.body.switch,
      keycaps: req.body.keycaps,
      case: req.body.case,
    },
  });
});

module.exports = router;
