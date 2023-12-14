const express = require('express')
const router = express.Router()

const userController = require("../controllers/UserController")
router.get('/getallusers', userController.getAllUsers)
router.post('/login', userController.login)
router.post('/getotp', userController.getOtp)
router.post('/postuser', userController.postUser)

module.exports = router;