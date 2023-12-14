const express = require('express')
const router = express.Router()

const roleController = require("../controllers/RoleController")
router.get('/getallroles', roleController.getAllRoles)
router.post('/postrole', roleController.postRole)

module.exports = router;