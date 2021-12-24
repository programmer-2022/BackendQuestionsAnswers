const express = require('express')
const morgan = require('morgan')
const config = require('./config')

const app = express()
const port = process.env.PORT

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

//Conexión MongoDB
const connection = require('./db/connection')

//Cargar rutas
const routesQuestion = require('./routes/Question')

//Rutas base
app.use('/api', routesQuestion)

//Iniciar Servidor 
app.listen(port, () => {
    console.log("Server up")
})
