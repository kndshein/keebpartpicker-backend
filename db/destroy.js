const keyboardModel = require("../models/Keyboard");

keyboardModel.deleteMany({}).then((results) => {
  console.log(results);
});
