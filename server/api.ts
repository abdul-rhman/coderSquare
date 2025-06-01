import { Post } from "./types"


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