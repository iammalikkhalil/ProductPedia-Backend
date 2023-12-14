const mongoose = require("mongoose");
const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String,
    },
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "country",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const company = mongoose.model("company", companySchema);
module.exports = company;