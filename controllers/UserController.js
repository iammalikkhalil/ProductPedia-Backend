const userModel = require("../models/UserModel");
const roleModel = require("../models/RoleModel");
const { ObjectId } = require("mongodb");

module.exports = {
  getAllUsers: async (req, res) => {
    let data = await userModel.find().populate('userRoleId');
    res.send(data);
  },
  login: async (req, res) => {
    let data = await userModel.findOne({ email: req.body.email });
    if (data != null) {
      if (data.password == req.body.password) {
        let userType = await roleModel.findOne(data.userRoleId);
        res.send({ responseCode: 200, msg: "Login Sucessfully", data: data, userType: userType });
      } else {
        res.send({ responseCode: 400, msg: "Invalid Username or Password" });
      }
    } else res.send({ responseCode: 404, msg: "Email Not Found!" });
  },
  getOtp: async (req, res) => {
    const accountSid = "ACb7efa3a5dcb63ded36d7d6d6e30fcd6f";
    const authToken = "94d17956d0e355ed8205673587c3f860";
    const client = require("twilio")(accountSid, authToken);
    let otp = Math.floor(Math.random() * 1000000);
    // client.messages
    //   .create({
    //     body: "Your Verification code is " + otp,
    //     from: "+14254411037",
    //     to: req.body.phoneNumber,
    //   })
    //   .then((message) => {
    //     console.log(message.sid);
    //     res.send({
    //       otp: otp,
    //       msg: "Message sent successfully",
    //       responseCode: 200,
    //     })
    //   })
    // .catch((error) => {
    //   console.error("Error sending message:", error);
    //   res.send(error)
    // });

    res.send({
      otp: otp,
      msg: "Message sent successfully",
      responseCode: 200,
    });
  },
  postUser: async (req, res) => {
    let roleObj = {
      name: "USER",
      discription: "User",
    };
    let roledata = roleModel(roleObj);
    let roleResult = await roledata.save();

    let userObj = {
      name: req.body.name,
      address: req.body.address,
      cellNo: req.body.cellNo,
      email: req.body.email,
      password: req.body.password,
      userRoleId: roleResult._id,
    };
    let userData = userModel(userObj);
    let userResult = await userData.save();
    console.log(userResult);
    res.send({ msg: "hello", data: userResult });
  },
};