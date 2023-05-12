const {register,login} = require('../controllers/userController');

exports.userRouters = (app)=>{
    app.post('/users/register',register)
    app.post('/users/login',login)
}