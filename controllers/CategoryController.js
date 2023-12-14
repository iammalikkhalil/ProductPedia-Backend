const categoryModel = require("../models/CategoryModel");
module.exports = {
  getAllCategories: async (req, res) => {
    let data = await categoryModel.find()
    .sort({ name: 1 });;
    res.send(data);
  },
  postCategory: async (req, res) => {
    let data = categoryModel(req.body);
    let result = await data.save();
    res.send({ msg: "hello", data: result });
  }
};