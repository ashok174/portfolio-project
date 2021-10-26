const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//model for userof the system
const userSchema = new Schema(
  {
    full_name: {
      type: String,
    },
    address: {
      type: String,
    },
    contact_no: {
      type: Number,
    },
    email: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
