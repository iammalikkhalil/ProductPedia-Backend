const companyModel = require("../models/CompanyModel");
module.exports = {
  getAllCompanies: async (req, res) => {
    let data = await companyModel.find().populate('country')
    .sort({ name: 1 });
    res.send(data);
  },
  postCompany: async (req, res) => {
    const companyObj = {
      name: req.body.name,
      discription: req.body.discription,
      companyLogo: req.file ? req.file.filename : undefined,
      country: req.body.country,
    }
    let data = companyModel(companyObj);
    let result = await data.save();
    res.send({ msg: "hello", data: result});
  }
};