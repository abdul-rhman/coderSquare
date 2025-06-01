import { db } from "../datastore";
import { ExpressHandler, Post } from "../types";
import crypto from 'crypto'
import {createPostReq, createPostRes, listPostsReq, listPostsRes} from "../api";

export const listPostsHandler:ExpressHandler<listPostsReq,listPostsRes>= (req,res)=>{
    res.status(200).json({posts:db.listPosts()})
}

export const createPostHandler:ExpressHandler<createPostReq,createPostRes>= (req,res)=>{
    if(req.body.title && req.body.url && req.body.userId){
        db.creatPost({
            id: crypto.randomUUID(),
            title: req.body.title,
            url: req.body.url,
            userId: req.body.userId,
            postedAt: Date.now()
        })
         res.status(200).send('done');
    }
    else res.status(400).send('missing fields');
}