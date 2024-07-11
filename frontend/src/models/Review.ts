import { Book } from './Book'

export interface Review {
    reviewId: number;
    bookId: number;
    userId: number;
    rating: number;
    description: string;
    user: null;
    book: Book;
}