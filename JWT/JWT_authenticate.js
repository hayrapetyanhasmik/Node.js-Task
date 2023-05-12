const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.SECRET;
const {Post} = require('../models');

exports.authenticateToken = (req,res,next)=>{
    const token = req.headers.authorization;
    const {userId} = req.body; 
    if(token === null) return res.status(401).json({message:"Not allowed"})
    jwt.verify(token,SECRET, (err,data)=>{
        Post.findOne({where:{userId}}) 
        if(err){
            res.status(401).json({message:"Requires authentication"})
        }else if(data.id === userId){
            next()
        } 
    })
}