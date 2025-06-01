import {User} from '../../types'

export interface UserDao{
    createUser(user: User): Promise<void>;
    getUseByEmail(email: string): Promise<User | undefined>;
    getUseByUsername(username: string): Promise<User | undefined>;
}