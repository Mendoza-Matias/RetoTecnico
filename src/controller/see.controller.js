
const index = (req,res)=>{
    res.render('index')
}
const register = (req,res)=>{
    res.render('register')
}

const login = (req,res)=>{
    res.render('login')
}

const exit = (req,res)=>{
    req.logout((err,next)=>{
        if(err){
            return next(err);
        }
        res.redirect('/login')
    });
}


const create = (req,res)=>{
    res.render('create')
}

module.exports ={
    index,
    register,
    login,
    exit,
    create
}