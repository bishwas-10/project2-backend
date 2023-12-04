import { Request, Response , NextFunction} from "express";
import PostMessage from "../models/postMessage";

export const getPosts=async (req:Request, res:Response, next:NextFunction)=>{
    const {creator} = req.body; 
    
    try{
        const postMessage = await PostMessage.find({creator});
        if(!creator){
            res.status(400).send({message:"send correct request"})
        }
        res.status(200).json(postMessage)
    }catch(err){
        res.status(404).json({message: err.message})
    }
    next();
}

export const createPosts= async(req:Request, res:Response, next:NextFunction)=>{
   const post = req.body;
  
    try{
       const newPost = await PostMessage.create(post);
        res.status(201).json({message:"posted",newPost});
    }catch(err){
        res.status(409).json({message: err.message})
    }
    next();
}