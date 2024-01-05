const express = require('express')
const imageMiddleware = require('../middleware/ImageUploader')
const router = express.Router()

const productController = require("../controllers/ProductController")
router.get('/getallproducts', productController.getAllProducts)
router.post('/postproduct', productController.postProduct)
router.put('/getfilteredproducts', productController.getFilteredProducts)
router.put('/updateproduct', productController.updateProduct)
router.delete('/deleteproduct/:productId', productController.deleteProduct)

module.exports = router;