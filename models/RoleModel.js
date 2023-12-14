const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
      type: String,
      require: true,
    },
    discription: {
      type: String,
      require: true,
    },
  },{
    timestamps:true,
  });
const user = mongoose.model('role', userSchema);
module.exports = user;