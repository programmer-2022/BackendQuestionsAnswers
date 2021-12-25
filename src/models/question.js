const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    questionText : String,
    category : String,
    answerOptions : Array
})

const Question = mongoose.model('Question', questionSchema)
module.exports = Question