import express , { RequestHandler, ErrorRequestHandler} from "express";
import { createPostHandler, listPostsHandler } from "./handlers/postHandler";
import expressAsyncHandler from "express-async-handler";
import { signInHandler, signUpHandler } from "./handlers/userHandler";

const app=express();
app.use(express.json({limit:'10kb'}))

const middleware:RequestHandler = (req,res,next)=>{
    console.log('path' , req.path);
    console.log('body' , req.body);
    next();
}

app.use(middleware)
app.get('/posts/v1',expressAsyncHandler(listPostsHandler))
app.post('/posts/v1',expressAsyncHandler(createPostHandler));

app.post('/signin/v1',expressAsyncHandler(signInHandler))
app.post('/signup/v1',expressAsyncHandler(signUpHandler));

const errorHandler: ErrorRequestHandler = function(error,req,res,nex)
{
    res.status(500).send('opps!!, something went wrong');
    console.log(error);
}
app.use(errorHandler)

app.listen(3000);