const mongoose = require('mongoose');

const user = 'c3r4st3s2021'
const password = '%23R00t9'
const dbname = 'testdb'
const uri = `mongodb+srv://${user}:${password}@questionsanswersdb.ljfaz.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true }           
)
    .then(() => console.log("MongoDB server up"))
    .catch(error => console.log(error))
