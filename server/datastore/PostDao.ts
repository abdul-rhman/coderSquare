import{Post} from '../types'

export interface PostDao{
    listPosts(): Post[];
    creatPost(post: Post): void;
    getPost(id :string): Post | undefined;
    deletePost(id :string): void;
}