import { Book } from './Book'
import { User } from './User'


export interface Review {
    reviewId?: number;
    bookId: number;
    userId: number;
    rating: number;
    description: string;
    user?: User;
    book?: Book;
}