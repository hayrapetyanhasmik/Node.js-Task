const {User} = require('../models');
const bcrypt = require('bcrypt');
const {generateAccessToken} = require('../JWT/JWT_generate');

exports.register = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const data = await User.create({email:email,password:hashedPassword});
        const token = generateAccessToken(email,data.id);
        res.status(201).json({message:"User created!",jwt:token})
    }catch(err){
        res.status(500).json({message:"Something went wrong!"})
    }
}

exports.login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const data = await User.findOne({where:{email:email}})
        if(data.email === email && bcrypt.compare(password,data.password)){
            const token = generateAccessToken(email,data.id)
            res.status(200).json({message:"Logged In!",jwt:token})
        }
    }catch(err){
        res.status(403).json({message:"Login credentials are not correct!"})
    }
}