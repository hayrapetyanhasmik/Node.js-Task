const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.SECRET

exports.generateAccessToken = (email,id)=>{
    return jwt.sign({email,id},SECRET,{expiresIn:"3600s"})
}