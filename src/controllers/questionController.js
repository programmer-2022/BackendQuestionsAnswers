const Question = require('../models/question')

const getQuestions = async (req, res) => {
    try {
        const arrayQuestions = await Question.find()
        res.status(200).send({ questions: arrayQuestions})
    } catch (error) {
        console.log(error);
    }
}

const addQuestion = async (req, res) => {
    const body = req.body
    
    try {
        if(body !== null) {
           await Question.create(body)
           res.status(200).send({ message: "Se almacenaron los datos correctamente" })
        }    
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getQuestions,
    addQuestion
}