const express = require('express')
const router = express.Router()

const questionController = require('../controllers/questionController')

router.get('/questions', questionController.getQuestions)
router.get('/count', questionController.getCountDocuments)
router.post('/questions', questionController.addQuestion)

module.exports = router