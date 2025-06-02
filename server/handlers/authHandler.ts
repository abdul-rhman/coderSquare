import { signInReq, signInRes, signUpReq, signUpRes } from "../api";
import { db } from "../datastore";
import { ExpressHandler, Post, User } from "../types";
import crypto from 'crypto'

export const signUpHandler:ExpressHandler<signUpReq,signUpRes>= async(req,res,next)=>{
    if(!(req.body.email && req.body.firstName && req.body.lastName && req.body.password && req.body.username))
    {
        res.status(403).send("some data are missing");
        return;
    }
    else if( await db.getUseByEmail(req.body.email) || await db.getUseByUsername(req.body.username))
    {
        res.status(403).send("username or mail already exists");
        return;
    }

    db.createUser({
        id: crypto.randomUUID(),
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    });
    
    res.status(400).send("done");
}

export const signInHandler:ExpressHandler<signInReq,signInRes>= async(req,res,next)=>{
    if(!(req.body.login && req.body.password))
    {
        res.status(400).send("some data are missing");
        return;
    }
    const existUser = await db.getUseByEmail(req.body.login) ||await db.getUseByUsername(req.body.login);
    if(!existUser)
    {
        res.status(403).send("username/email is not found");
        return;
    }
    else
    {
        res.status(200).json({id: existUser.id,
            username: existUser.username,
            firstName: existUser.firstName,
            lastName: existUser.lastName,
            email: existUser.email});
    }
}