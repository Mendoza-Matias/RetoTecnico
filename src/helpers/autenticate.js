const helpers = {};

//Middleware para autenticacion del usuario para poder pasar al contenido

helpers.isAuthenticated = (req,res,next) =>{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login')
};

module.exports = helpers;