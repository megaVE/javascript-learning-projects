const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const path = require('path');
const db = require('./db/connection');
const bodyParser =  require('body-parser');
const Job = require('./models/Job');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`Express is working on the port ${PORT}`)
})

// Body Parser  

app.use(bodyParser.urlencoded({extended: false}));

// Handle Bars

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', expressHandlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Static Folder

app.use(express.static(path.join(__dirname, 'public')));

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
    const search = req.query.job;
    const query = '%'+search+'%';
    if(!search){
        Job.findAll({order: [['createdAt', 'DESC']]})
        .then(jobs => {
            res.render('index', {jobs});
        })
        .catch(err => console.log(err));
    } else {
        Job.findAll({
            where: {title: {[Op.like]: query}},
            order: [['createdAt', 'DESC']]
        })
        .then(jobs => {
            res.render('index', {jobs, search});
        })
        .catch(err => console.log(err));
    }

})

// Jobs routes

app.use('/jobs', require('./routes/jobs'));