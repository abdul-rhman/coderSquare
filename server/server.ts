import express , { RequestHandler, ErrorRequestHandler} from "express";
import { createPostHandler, listPostsHandler } from "./handlers/postHandler";
import expressAsyncHandler from "express-async-handler";
import { signInHandler, signUpHandler } from "./handlers/authHandler";
import { logger } from "./middlewares/logger";
import { errorHandler } from "./middlewares/errorHandler";

const app=express();
app.use(express.json({limit:'10kb'}))


app.use(logger)
app.get('/posts/v1',expressAsyncHandler(listPostsHandler))
app.post('/posts/v1',expressAsyncHandler(createPostHandler));

app.post('/signin/v1',expressAsyncHandler(signInHandler))
app.post('/signup/v1',expressAsyncHandler(signUpHandler));

app.use(errorHandler)

app.listen(3000);