const feedbackModel = require("../models/FeedbackModel");
module.exports = {
  getAllFeedbacks: async (req, res) => {
    try {
      const data = await feedbackModel.find().populate({
        path: "productId",
        populate: [
          {
            path: "company",
            populate: {
              path: "country",
              model: "country",
            },
          },
          {
            path: "subCategory",
            populate: {
              path: "category",
              model: "category",
            },
          },
        ],
      });
      res.send(data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  postFeedback: async (req, res) => {
    console.log(req.body);
    let data = feedbackModel(req.body);
    let result = await data.save();
    res.send({ msg: "hello", data: result });
  },
};
