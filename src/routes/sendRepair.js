const express = require('express');
const sendRepair = express.Router();
const repair = require('../models/reparations');


sendRepair.post('/create',async(req,res)=>{
    //Guardo el cuerpo de la peticion en una constante
    const reparacion = repair(req.body);

    //Guardo mi informacion en la db
    const guardar = await reparacion.save()
    console.log(guardar);
    
    res.redirect('/contend')
})

module.exports = sendRepair;