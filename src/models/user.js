const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt-nodejs');


const userSchema = new Schema ({
    nombre : String,
    clave: String
});


//Al guardar mi informacion en el modelo ya se acciona y se cifra mi clave

//Cifro la contraseña
userSchema.methods.encriptar = (clave)=> {
    return bcrypt.hashSync(clave,bcrypt.genSaltSync(10));
};

//Comparar la contraseña para saber si la que esta guardada es la misma

userSchema.methods.comparar = function (clave){
    return bcrypt.compareSync(clave,this.clave);
};


module.exports = mongoose.model('user',userSchema)

