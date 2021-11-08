const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//model for the project of the user
const projectSchema = new Schema(
  {
    project_name: {
      type: String,
    },
    project_link: {
      type: String,
    },
    user_id: {
      type: String,
    },
  },
  { timestamps: true }
);
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
