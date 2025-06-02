import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = function(error,req,res,nex)
{
    res.status(500).send('opps!!, something went wrong');
    console.log(error);
}