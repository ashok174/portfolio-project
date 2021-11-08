"use strict";
const Project = require("../model/project");

// add  new user's
const store = (req, res, next) => {
  let project = new Project({
    project_name: req.body.project_name,
    project_link: req.body.project_link,
    user_id: req.body.user_id,
  });
  project
    .save()
    .then((response) => {
      res.json({
        message: "project added successfully",
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        message: "An error occured!",
      });
    });
};

//show specific project
const index = (req, res, next) => {
  let user_id = req.body.user_id;
  User.findById(user_id)
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
  store,
  index,
};
