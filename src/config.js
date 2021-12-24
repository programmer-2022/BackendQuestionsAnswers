const dotenv = require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 5000,
    USER: process.env.USER || 'c3r4st3s2021',
    PASSWORD: process.env.PASSWORD || '%23R00t9',
    DATABASE: process.env.DATABASE || 'testdb'
}