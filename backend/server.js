"use strict";
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const UserRoute = require("./route/user");
const ProjectRoute = require("./route/project");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/portfolio", {
  useNewUrlParser: true,
  UseUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database connection established");
});

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));

  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.use("/uploads", express.static("uploads"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization "
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT",
      "POST",
      "DELETE",
      "PATCH",
      "GET"
    );
    return res.status(200).json({});
  }
  next();
});

app.use("/api/user", UserRoute);
app.use("/api/project", ProjectRoute);
