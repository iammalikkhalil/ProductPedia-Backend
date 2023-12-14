const express = require('express')
const router = express.Router()

const feedbackController = require("../controllers/FeedbackController")
router.get('/getallfeedbacks', feedbackController.getAllFeedbacks)
router.post('/postfeedback', feedbackController.postFeedback)

module.exports = router;