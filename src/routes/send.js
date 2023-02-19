const express = require('express');
const send = express.Router()
const passport = require('passport');
const User = require('../models/user');//Modelo


//Registro

send.post('/register',passport.authenticate('local-signup',{
    successRedirect:'/login', //Bien
    failureRedirect:'/' ,//Mal
    passReqToCallback: true
}));

//Ingreso
send.post('/login',passport.authenticate('local-signin',{
    successRedirect:'/contend',
    failureRedirect:'/login',
    passReqToCallback:true
}));


//Exporto mi modulo
module.exports = send;
