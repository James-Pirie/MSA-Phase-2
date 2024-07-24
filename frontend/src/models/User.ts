import {Review} from './Review'

export interface User {
    userId: number;
    userName: string;
    password: string;
    reviews: Review[];
}