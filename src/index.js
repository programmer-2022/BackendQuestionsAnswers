const express = require('express')
const app = express()

const port = process.env.PORT || 5000
const connection = require('./db/connection')

app.listen(port, () => {
    console.log("Server up")
})
