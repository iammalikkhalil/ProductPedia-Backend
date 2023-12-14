const roleModel = require("../models/RoleModel");
module.exports = {
  getAllRoles: async (req, res) => {
    let data = await roleModel.find();
    res.send(data);
  },
  postRole: async (req, res) => {
    let data = roleModel(req.body);
    let result = await data.save();
    res.send({ msg: "hello", data: result });
  }
};