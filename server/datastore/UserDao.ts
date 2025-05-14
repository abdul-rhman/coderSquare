import {User} from '../types'

export interface UserDao{
    createUser(user: User): void;
    getUseByEmail(email: string): User | undefined;
    getUseByUSername(username: string): User | undefined;
}