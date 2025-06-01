import { dataStore } from "..";
import { User, Post, Like, Comment } from "../../types";


export class inMemortDataStore implements dataStore
{
    private users:User[]=[];
    private posts:Post[]=[];
    private likes:Like[]=[];
    private comments:Comment[]=[];

    createUser(user: User): Promise<void> {
        this.users.push(user);
        return Promise.resolve();
    }
    getUseByEmail(email: string): Promise<User | undefined> {
        return Promise.resolve(this.users.find((user:User)=>{user.email == email}));
    }
    getUseByUsername(username: string): Promise<User | undefined> {
        return Promise.resolve(this.users.find((user:User)=>{user.username == username}));
    }
    listPosts(): Promise<Post[]> {
        return Promise.resolve(this.posts);
    }
    createPost(post: Post): Promise<void> {
        this.posts.push(post);
        return Promise.resolve();
    }
    getPost(id: string): Promise<Post | undefined> {
        return Promise.resolve(this.posts.find(post=>{post.id==id}));
    }
    deletePost(id: string): Promise<void> {
        const index:number = this.posts.findIndex(post=>{post.id == id})
        if(index !== -1) this.posts.splice(index,1);
        return Promise.resolve();
    }
    createLike(like: Like): Promise<void> {
        this.likes.push(like);
        return Promise.resolve();
    }
    createComment(comment: Comment): Promise<void> {
        this.comments.push(comment);
        return Promise.resolve();
    }
    listComments(postID: string): Promise<Comment[]> {
        return Promise.resolve(this.comments.filter((comment)=>{comment.postId == postID}));
    }
    deleteComment(id: string): Promise<void> {
        const index:number = this.comments.findIndex(comment=>{comment.id == id})
        if(index !== -1) this.comments.splice(index,1);
        return Promise.resolve();
    }
    
}