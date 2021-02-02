const keyboardModel = require("../models/Keyboard");
const keyboardPartsModel = require("../models/KeyboardParts");

keyboardModel.find({}).remove(() => {
  keyboardPartsModel.find({}).remove(() => {
    let batman = keyboardModel
      .create({
        name: "Batman",
        type: "60% Keyboard",
      })
      .then((keyboard) => {
        Promise.all([
          keyboardPartsModel
            .create({
              PCB: "BM60 RGB Poker",
              switch: "Drop Halo Clear",
              keycaps: "EnjoyPBT Blank Keyset",
              case: "KBDFans 5 Degrees 60%",
            })
            .then((keyboardpart) => {
              keyboard.keyboards.push(keyboardpart);
            }),
        ]).then(() => {
          keyboard.save();
        });
      });
  });
});
