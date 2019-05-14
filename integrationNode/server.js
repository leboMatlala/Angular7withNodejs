const express = require('express');
const path =require('path');
const app = express();

bodyParser = require('body-parser');
var session = require('express-session');


//using middleware
app.use(express.static(path.join(__dirname,'dist/integrationNode')));
app.use('/routes',routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

//catch all the other routes and return it to the index
app.get('*',(req,res)=>{

   res.sendFile(path.join(__dirname,'dist/integrationNode/index.html'))
});

// connection configurations
const mysql = require('mysql');
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodedemo'
});

// connect to database
mc.connect();


const port = process.env.PORT || 4600;

app.listen(port,(req,res)=>{

    console.log(`Running on port: ${port}`);
});


//getting our routes
const routes = require('./server/routes/appRoutes');
routes(app)

