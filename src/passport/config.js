const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user')

//Registro mi usuario
passport.use('local-signup',new localStrategy({
    usernameField:'nombre',
    passwordField:'clave',
    passReqToCallback:true
    
},async(req,nombre,clave,done)=>{
    //VALIDACION

    const usuario = await User.findOne({nombre});
    if(usuario){
        return done (null,false,{message:'Este usuario ya existe'});
    }else{
    //Creacion de mi nuevo usuario
    const user = new User();

    user.nombre = nombre;
    user.clave = user.encriptar(clave)

    //Al guardar la informacion lo debo hacer de forma asincrona
    const guardar = await user.save();
    
    console.log(guardar);

    done(null,user);
    //Termina 
    }
    
    
}));

//Autenticacion para login
passport.use('local-signin',new localStrategy({
    usernameField:'nombre',
    passwordField:'clave',
    passReqToCallback:true
},async(req,nombre,clave,done) =>{

    const usuario = await User.findOne({nombre:nombre});
    
    if(!usuario){
        return done(null,false,{message:'Este usuario no existe'});
    }
    if(!usuario.comparar(clave)){
        
        return done(null,false,{message:'Contraseña incorrecta'})
    }
    done(null,usuario);
}))




//Serializar (Mantener abierta la cuenta con dicho perfil)

passport.serializeUser((user,done)=>{
    done(null,user.id)
});

passport.deserializeUser(async(id,done)=>{
    const user = await User.findById(id); //Consulta

    done(null,user);
});