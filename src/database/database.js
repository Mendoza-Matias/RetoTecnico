const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(db=> console.log('Funcionado'))
    .catch(err => console.log(err));

