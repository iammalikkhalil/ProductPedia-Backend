const productModel = require("../models/ProductModel");
const mongoose = require("mongoose");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      let data = await productModel
        .find()
        .populate({
          path: "company",
          populate: {
            path: "country",
            model: "country",
          },
        })
        .populate({
          path: "subCategory",
          populate: {
            path: "category",
            model: "category",
          },
        })
        .sort({ name: 1 });
      res.send(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  getFilteredProducts: async (req, res) => {
    try {
      const query = {};
      query[`${req.body.sortBy}`] = req.body.id;
      const data = await productModel
        .find(query)
        .populate({
          path: "company",
          populate: {
            path: "country",
            model: "country",
          },
        })
        .populate({
          path: "subCategory",
          populate: {
            path: "category",
            model: "category",
          },
        })
        .sort({ name: 1 });
      const local = [];
      const international = [];
      data.forEach((element) => {
        if (element.company.country.name == "Pakistan") {
          local.push(element);
        } else {
          international.push(element);
        }
      });
      res.send({ local, international });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  postProduct: async (req, res) => {
    let data = productModel(req.body);
    let result = await data.save();
    res.send({ msg: "hello", data: result });
  },

  updateProduct: async (req, res) => {
    try {
      const productId = req.body.id;
      const updatedProductData = req.body.product;

      const result = await productModel.updateOne(
        { _id: new mongoose.Types.ObjectId(productId) },
        { $set: updatedProductData }
      );

      console.log(result);
      if (result.nModified === 0) {
        return res
          .status(200)
          .send({ msg: "No changes applied to the product." });
      }
      res.send({ msg: "Product updated successfully" });
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).send({ msg: "Internal Server Error" });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const productId = new mongoose.Types.ObjectId(req.params.productId);
  
      // Check if the product exists before attempting to delete
      const existingProduct = await productModel.findById(productId);
  
      if (!existingProduct) {
        return res.status(200).send({ msg: "Product not found" });
      }
  
      // If the product exists, proceed with deletion
      const result = await productModel.deleteOne({ _id: productId });
  
      if (result.deletedCount > 0) {
        res.status(200).send({ msg: "Product deleted successfully" });
      } else {
        res.status(500).send({ msg: "Error deleting product" });
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).send({ msg: "Internal Server Error" });
    }
  },  
};
