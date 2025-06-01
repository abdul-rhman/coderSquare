import { dataStore } from "..";
import { User, Post, Like, Comment } from "../../types";
import {Client as pgClient} from 'pg'

export class sqlDataStore implements dataStore
{
    private users:User[]=[];
    private posts:Post[]=[];
    private likes:Like[]=[];
    private comments:Comment[]=[];
    private con = new pgClient({
            host:'localhost',
            password:'12345',
            user:'postgres',
            port:5432,
            database:'codersquare'});

    constructor(){
        this.con.connect().then(a=>{console.log('connected')});
        return this;
    }

    async createUser(user: User): Promise<void> {
        await this.con.query(
        'INSERT INTO users(id, username, firstName, lastName, email , password) VALUES($1, $2, $3, $4, $5, $6)',
        [
            user.id,
            user.username,
            user.firstName,
            user.lastName,
            user.email,
            user.password
        ]
    );
    }

    async getUseByEmail(email: string): Promise<User | undefined> {
        return (await this.con.query<User>('select * from users where email = $1',[email])).rows[0];
    }

    async getUseByUsername(username: string): Promise<User | undefined> {
        return (await this.con.query<User>('select * from users where username = $1',[username])).rows[0];
    }

    async listPosts(): Promise<Post[]> {
        return (await this.con.query<Post>('select * from posts')).rows;
    }

    async createPost(post: Post): Promise<void> {
    await this.con.query(
        'INSERT INTO posts(id, title, url, postedAt, userId) VALUES($1, $2, $3, $4, $5)',
        [
            post.id,
            post.title,
            post.url,
            post.postedAt,
            post.userId
        ]
    );

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