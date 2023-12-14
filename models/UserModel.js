const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    cellNo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userRoleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "role",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model("user", userSchema);
module.exports = user;