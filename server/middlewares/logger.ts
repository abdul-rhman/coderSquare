import { RequestHandler } from "express";

export const logger:RequestHandler = (req,res,next)=>{
    console.log('path' , req.path);
    console.log('body' , req.body);
    next();
}
