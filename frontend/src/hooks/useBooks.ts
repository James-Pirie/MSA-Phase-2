import { useState } from 'react';
import { Book } from '../models/Book';
import { getBookById } from '../services/BookServices';


export const useBooks = () => {
    const [errorId, setErrorId] = useState<string | null>(null);
    const [bookById, setBook] = useState<Book | null>(null)
 
    const fetchBookById = async (id: number) => {
        try {
            const book = await getBookById(id); 
            setBook(book);  
        } catch (err) {
            setErrorId('Failed to fetch book');
        }
    };



    return { fetchBookById, errorId, bookById };
};
