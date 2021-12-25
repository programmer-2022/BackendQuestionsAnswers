const Category = require('../models/category')

const getCategory = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).send({ categories })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getCategory
}