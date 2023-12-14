const express = require('express')
const router = express.Router()

const categoryController = require("../controllers/CategoryController")
router.get('/getallcategories', categoryController.getAllCategories)
router.post('/postcategory', categoryController.postCategory)

module.exports = router;