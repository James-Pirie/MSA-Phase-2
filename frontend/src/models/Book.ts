import { Author } from './Author';

export interface Book {
    bookId: number;
    authorId: number;
    bookName: string;
    coverImageS: string;
    coverImageM: string;
    coverImageL: string;
    year: number;
    author: Author;
    reviews: null;
}