const express = require('express')
const router = express.Router()

const countryController = require("../controllers/CountryController")
router.get('/getallcountries', countryController.getAllCountries)
router.post('/postcountry', countryController.postCountry)

module.exports = router;