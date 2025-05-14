import { CommentDao } from "./CommentDao";
import { LikeDao } from "./LikeDao";
import { inMemortDataStore } from "./memoryDB";
import { PostDao } from "./PostDao";
import { UserDao } from "./UserDao";

export interface dataStore extends UserDao,PostDao,LikeDao,CommentDao {}

export const db = new inMemortDataStore();