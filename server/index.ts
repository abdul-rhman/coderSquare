import express , { RequestHandler, ErrorRequestHandler} from "express";
import { createPostHandler, listPostsHandler } from "./handlers/postHandler";

const app=express();
app.use(express.json({limit:'10kb'}))

const middleware:RequestHandler = (req,res,next)=>{
    console.log('path' , req.path);
    console.log('body' , req.body);
    next();
}

app.use(middleware)
app.get('/posts/v1',listPostsHandler)

app.post('/posts/v1',createPostHandler);

const errorHandler: ErrorRequestHandler = function(error,req,res,nex)
{
    res.status(500).send('opps!!, something went wrong');
}
app.use(errorHandler)

app.listen(3000);