import { Author } from './Author';
import { Review } from './Review';


export interface Book {
    bookId: number;
    authorId: number;
    bookName: string;
    coverImageS: string;
    coverImageM: string;
    coverImageL: string;
    year: number;
    author: Author;
    reviews: Review[];
}