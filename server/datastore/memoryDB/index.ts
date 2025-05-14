import { dataStore } from "..";
import { User, Post, Like, Comment } from "../../types";

export class inMemortDataStore implements dataStore
{
    private users:User[]=[];
    private posts:Post[]=[];
    private likes:Like[]=[];
    private comments:Comment[]=[];

    createUser(user: User): void {
        this.users.push(user);
    }
    getUseByEmail(email: string): User | undefined {
        return this.users.find((user:User)=>{user.email == email});
    }
    getUseByUSername(username: string): User | undefined {
        return this.users.find((user:User)=>{user.username == username});
    }
    listPosts(): Post[] {
        return this.posts;
    }
    creatPost(post: Post): void {
        this.posts.push(post);
    }
    getPost(id: string): Post | undefined {
        return this.posts.find(post=>{post.id==id})
    }
    deletePost(id: string): void {
        const index:number = this.posts.findIndex(post=>{post.id == id})
        if(index !== -1) this.posts.splice(index,1);
    }
    createLike(like: Like): void {
        this.likes.push(like);
    }
    createComment(comment: Comment): void {
        this.comments.push(comment);
    }
    listComments(postID: string): Comment[] {
        return this.comments.filter((comment)=>{comment.postId == postID});
    }
    deleteComment(id: string): void {
        const index:number = this.comments.findIndex(comment=>{comment.id == id})
        if(index !== -1) this.comments.splice(index,1);
    }
    
}