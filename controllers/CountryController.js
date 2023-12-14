const countryModel = require("../models/CountryModel");
module.exports = {
  getAllCountries: async (req, res) => {
    let data = await countryModel.find().sort({ name: 1 });
    res.send(data);
  },
  postCountry: async (req, res) => {
    let data = countryModel(req.body);
    let result = await data.save();
    res.send({ msg: "hello", data: result });
  },
};
