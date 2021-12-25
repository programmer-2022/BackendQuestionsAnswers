const express = require('express')
const morgan = require('morgan')
const config = require('./config')
const cors = require('cors')

const app = express()
const port = process.env.PORT

//Permissions Cors
app.use(cors())

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

//Conexión MongoDB
const connection = require('./db/connection')

//Cargar rutas
const routesQuestion = require('./routes/Question')
const routesCategory = require('./routes/Category')

//Rutas base
app.use('/api', routesQuestion)
app.use('/api', routesCategory)

//Iniciar Servidor 
app.listen(port, () => {
    console.log("Server up")
})