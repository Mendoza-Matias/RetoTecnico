const express = require('express');
const see = express.Router();
const {isAuthenticated} = require('../helpers/autenticate');//Autenticacion
//Ruta de mi modelo
const repair = require('../models/reparations');
const controller = require('../controller/see.controller')
//RUTAS PARA SERVIR LAS VISTAS

//Index
see.get('/',controller.index)

//Registro
see.get('/register',controller.register)

//Ingreso
see.get('/login',controller.login)

//cerrar secion
see.get('/exit',controller.exit)

//Contenido
see.get('/contend',isAuthenticated,async(req,res)=>{

    const reparacion = await repair.find({})
    
    res.render('contend',{reparacion});
})

//Ruta para crear un pedido

see.get('/create',controller.create)




//Exporto mi modulo
module.exports = see;