const express = require('express')
const imageMiddleware = require('../middleware/ImageUploader')

const router = express.Router()

const companyController = require("../controllers/CompanyController")
router.get('/getallcompanies', companyController.getAllCompanies)
router.post('/postcompany', imageMiddleware, companyController.postCompany)

module.exports = router;