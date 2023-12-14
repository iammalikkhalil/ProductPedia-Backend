const feedbackModel = require("../models/FeedbackModel");
module.exports = {
  getAllFeedbacks: async (req, res) => {
    const data = await feedbackModel.find().populate({
      path: 'productId',
      populate: [
        {
          path: 'companyId',
          populate: {
            path: 'country',
            model: 'country',
          },
        },
        {
          path: 'categoryId',
          model: 'category',
        },
      ],
    });
    res.send(data);    
  },
  postFeedback: async (req, res) => {
    console.log(req.body);
    let data = feedbackModel(req.body);
    let result = await data.save();
    res.send({ msg: "hello", data: result });
  }
};