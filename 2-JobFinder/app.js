const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser =  require('body-parser');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`Express is working on the port ${PORT}`)
})

// Body Parser

app.use(bodyParser.urlencoded({extended: false}));

// DB Connection

db
.authenticate()
.then(() => {
    console.log("Successfully connected to the database");
})
.catch(err =>{
    console.log("There was an error with the connection", err);
})

// Routes

app.get('/', (req, res) => {
    res.send("It's working!");
})

// Jobs routes

app.use('/jobs', require('./routes/jobs'));