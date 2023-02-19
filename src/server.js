const express = require('express');
const path = require('path');
const pug = require('pug');//Motor de plantillas
const config = require('./passport/config');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config()
require('./database/database');//Base de datos
//Rutas
const see = require('./routes/see');
const send = require('./routes/send');
const sendRepair = require('./routes/sendRepair');

const app = express();

//Middleware-------
app.set('view engine','pug');//Plantillas
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))//Estaticos
app.use(express.json())
app.use(express.urlencoded({extended:false}));//Bodyparser

//Passport express-session
app.use(session({
    secret: process.env.SECRET,
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

//Rutas------
app.use(see);
app.use(send);
app.use(sendRepair);
//Servidor-----

const port = process.env.PORT
app.listen(port,()=>{
    console.log("Listening on port " + port)
})

