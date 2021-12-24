const mongoose = require('mongoose');

const user = process.env.USER
const password = process.env.PASSWORD
const dbname = process.env.DATABASE

const uri = `mongodb+srv://${user}:${password}@questionsanswersdb.ljfaz.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true }           
)
    .then(() => console.log("MongoDB server up"))
    .catch(error => console.log(error))
