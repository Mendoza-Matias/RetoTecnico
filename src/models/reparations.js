const mongoose = require('mongoose')
const {Schema} = mongoose;

//Modelo para almacenar la informacion en mi db
const repairSchema = new Schema({
    nombre:String,
    telefono:String,
    reparacion:String
});

module.exports = mongoose.model('reparaciones',repairSchema);