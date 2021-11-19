const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const expressFormidable = require("express-formidable");

app.use(expressFormidable());
app.use(cors());
require("dotenv").config();

mongoose.connect(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const homeRoute = require("./routes/home");
app.use(homeRoute);

const reviewsRoute = require("./routes/reviews");
app.use(reviewsRoute);

const gameRoute = require("./routes/game");
app.use(gameRoute);

const userRoute = require("./routes/user");
app.use(userRoute);

app.all("*", function (req, res) {
  res.json({ message: "Page not found" });
});

app.listen(process.env.PORT || "4000", () => {
  console.log("Server has started");
});
