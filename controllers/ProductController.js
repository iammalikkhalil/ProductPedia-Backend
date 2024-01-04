const productModel = require("../models/ProductModel");
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
};
