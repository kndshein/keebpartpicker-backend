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
        keyboards: allKeyboards,
      });
    })
    .catch((err) => res.json({ status: 400, err: err }));
});

////// Route to create a keyboard
router.post("/", async (req, res) => {
  keyboardModel
    .create({
      name: req.body.name,
      type: req.body.type,
      parts: {
        PCB: req.body.PCB,
        switch: req.body.switch,
        keycaps: req.body.keycaps,
        case: req.body.case,
      },
    })
    .then((allKeyboards) => {
      res.json({
        status: 200,
        keyboards: allKeyboards,
      });
    })
    .catch((err) => res.json({ status: 400, err: err }));
});

////// Route to update a keyboard
router.put("/:id", async (req, res) => {
  keyboardModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((allKeyboards) => {
      res.json({
        status: 200,
        keyboards: allKeyboards,
      });
    })
    .catch((err) => res.json({ status: 400, err: err }));
});

///// Route to delete keyboard
router.delete("/:id", async (req, res) => {
  keyboardModel
    .deleteOne({ _id: req.params.id })
    .then((keyboard) => {
      res.json(keyboard);
    })
    .catch((err) => res.json({ status: 400, err: err }));
});

module.exports = router;
