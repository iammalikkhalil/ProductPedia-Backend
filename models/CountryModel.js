const mongoose = require("mongoose");
const countrySchema = new mongoose.Schema({
    name:{
      type: String,
      required: true,
    },
  },{
    timestamps:true,
  });
const country = mongoose.model('country', countrySchema);
module.exports = country;