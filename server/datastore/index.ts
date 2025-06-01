import { CommentDao } from "./dao/CommentDao";
import { LikeDao } from "./dao/LikeDao";
import { PostDao } from "./dao/PostDao";
import { UserDao } from "./dao/UserDao";
import { inMemortDataStore } from "./memoryDB";
import { sqlDataStore } from "./sqlDB";

export interface dataStore extends UserDao,PostDao,LikeDao,CommentDao {}

export const db = new sqlDataStore();