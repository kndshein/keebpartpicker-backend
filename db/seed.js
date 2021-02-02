const keyboardModel = require("../models/Keyboard");
const keyboardPartsModel = require("../models/KeyboardParts");

const keyboards = [
  {
    name: "Batman",
    type: "60% Keyboard",
    parts: {
      PCB: "BM60 RGB Poker",
      switch: "Drop Halo Clear",
      keycaps: "EnjoyPBT Blank Keyset",
      case: "KBDFans 5 Degrees 60%",
    },
  },
  {
    name: "Batman2",
    type: "60% Keyboard2",
    parts: {
      PCB: "BM60 RGB Poker2",
      switch: "Drop Halo Clear2",
      keycaps: "EnjoyPBT Blank Keyset2",
      case: "KBDFans 5 Degrees 60%2",
    },
  },
  {
    name: "Batman3",
    type: "60% Keyboard3",
    parts: {
      PCB: "BM60 RGB Poker3",
      switch: "Drop Halo Clear3",
      keycaps: "EnjoyPBT Blank Keyset3",
      case: "KBDFans 5 Degrees 60%3",
    },
  },
];

keyboardModel
  .create(keyboards)
  .then((keyboards) => {
    console.log(keyboards);
  })
  .catch((err) => {
    console.log(err);
  });

// keyboardModel.find({}).remove(() => {
//   keyboardPartsModel.find({}).remove(() => {
//     let batman = keyboardModel
//       .create({
//         name: "Batman",
//         type: "60% Keyboard",
//       })
//       .then((keyboard) => {
//         Promise.all([
//           keyboardPartsModel
//             .create({
//               PCB: "BM60 RGB Poker",
//               switch: "Drop Halo Clear",
//               keycaps: "EnjoyPBT Blank Keyset",
//               case: "KBDFans 5 Degrees 60%",
//             })
//             .then((keyboardpart) => {
//               keyboard.keyboards.push(keyboardpart);
//             }),
//         ]).then(() => {
//           keyboard.save();
//         });
//       });
//   });
// });
