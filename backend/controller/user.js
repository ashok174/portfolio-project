"use strict";
const User = require("../model/user");

//show the list of user
const show = (req, res, next) => {
  User.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};
// add  new user's
const store = (req, res, next) => {
  let user = new User({
    full_name: req.body.full_name,
    address: req.body.address,
    contact_no: req.body.contact_no,
    email: req.body.email,
  });
  if (req.file) {
    user.avatar = req.file.path;
  }
  user
    .save()
    .then((response) => {
      res.json({
        message: "User added successfully",
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        message: "An error occured!",
      });
    });
};

//show specific user
const index = (req, res, next) => {
  User.findById("6177dc506ae8b9acc51ee871")
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};

module.exports = {
  show,
  store,
  index,
};
