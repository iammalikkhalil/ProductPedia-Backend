const subCategoryModel = require("../models/SubCategoryModel");
const mongoose = require("mongoose");

module.exports = {
  getAllSubCategories: async (req, res) => {
    try {
      let data = await subCategoryModel
        .find()
        .populate("category")
        .sort({ name: 1 });
      res.send(data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  getSubCategoriesByCategoryId: async (req, res) => {
    try {
      let data = await subCategoryModel
        .find({ category: new mongoose.Types.ObjectId(req.body.category) })
        .populate("category")
        .sort({ name: 1 });
      res.send(data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  postSubCategory: async (req, res) => {
    let data = subCategoryModel(req.body);
    let result = await data.save();
    res.send({ msg: "hello", data: result });
  },
};
