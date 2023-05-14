const {Post} = require('../models');


exports.createPost = async(req,res)=>{
    try{
        const {title,content,UserId} = req.body;
        await Post.create({title,content,UserId});
        res.status(201).json({message:"Post created!"})
    }catch(err){
        res.status(500).json({message:"Something went wrong!"})
    }
}

exports.getPostById = async(req,res)=>{
    try{
        const {id} = req.params;
        const data = await Post.findOne({where:{id}});
        res.status(200).json({message:"Success!", data:data})
    }catch(err){
        res.status(500).json({message:"Something went wrong!"})
    }
}

exports.updatePost = async(req,res)=>{
    try{
        const {id} = req.params;
        const {title,content,UserId} = req.body;
        await Post.update({title,content,UserId},{where:{id}});
        res.status(200).json({message:"Post updated!"})
    }catch(err){
        res.status(500).json({message:"Something went wrong!"})
    }
}

exports.deletePost = async(req,res)=>{
    try{
        const {id} = req.params;
        await Post.destroy({where:{id}});
        res.status(204).json({message:"Post deleted!"})
    }catch(err){
        res.status(500).json({message:"Something went wrong!"})
    }
}

exports.getPostsByPages = async(req,res)=>{
    try{
        const {page} = req.query;
        const limit = 20;
        const offset = (page-1)*limit;
        const data = await Post.findAll({limit,offset,order:[["createdAt","DESC"]]});
        const totalCount = await Post.count();
        const totalPages = Math.ceil(totalCount/limit);
        res.status(200).json({message:"Success!", data,totalCount,totalPages})
    }catch(err){
        res.status(500).json({message:"Something went wrong!"})
    }
}