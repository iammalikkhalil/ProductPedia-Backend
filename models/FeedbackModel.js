const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    reference: {
      type: String,
    },
    discription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const category = mongoose.model("feedback", categorySchema);
module.exports = category;
