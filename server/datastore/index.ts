import { CommentDao } from "./CommentDao";
import { LikeDao } from "./LikeDao";
import { PostDao } from "./PostDao";
import { UserDao } from "./UserDao";
import { inMemortDataStore } from "./memoryDB";

export interface dataStore extends UserDao,PostDao,LikeDao,CommentDao {}

export const db = new inMemortDataStore();