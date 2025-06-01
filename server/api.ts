import { Post , User } from "./types"


/* Posts API */
export type createPostRes = {}
export type createPostReq = Pick<Post,'title'|'url'|'userId'>


export type listPostsRes = {
    posts: Post[]
}
export type listPostsReq = {}


export type getPostRes = {
    post: Post | undefined
}
export type getPostReq = {}

export type signUpReq =  Pick<User,'email'|'firstName'|'lastName'|'password'|'username'>;
export type signUpRes = {};
export type signInReq = {
    login: string;
    password: string;
}
export type signInRes = Pick<User,'email'|'firstName'|'lastName'|'id'>|{};