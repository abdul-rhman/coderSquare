import express , { Request,Response,NextFunction, RequestHandler} from "express";
import { createPostHandler, listPostsHandler } from "./handlers/postHandler";

const app=express();
app.use(express.json({limit:'10kb'}))
const posts:any = [];

const middleware:RequestHandler = (req,res,next)=>{
    console.log('path' , req.path);
    console.log('body' , req.body);
    next();
}

app.use(middleware)
app.get('/posts',listPostsHandler)

app.post('/posts',createPostHandler);
app.listen(3000);