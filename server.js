require("dotenv").config();

const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

////// MIDDLEWARE //////
app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Test Route, babyyyyy",
  });
});

////// ROUTES FOR CONTROLLERS //////
const keyboardsRouter = require("./controllers/keyboardsRoutes");
app.use("/keyboards", keyboardsRouter);

app.listen(PORT, () => console.log(`listening in on port: ${PORT}`));
