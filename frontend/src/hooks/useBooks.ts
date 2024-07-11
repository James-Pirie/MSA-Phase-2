import { useState, useEffect } from 'react';
import { Book } from '../models/Book';
import { getBooks, getBookById } from '../services/BookServices';


export const useBooks = () => {
    const [allBooks, setBooks] = useState<Book[]>([]);
    const [loadingAll, setLoading] = useState<boolean>(true);
    const [errorAll, setError] = useState<string | null>(null);
    const [errorId, setErrorId] = useState<string | null>(null);
    const [bookById, setBook] = useState<Book | null>(null)
 

    useEffect(() => {
        const fetchBooks = async () => {

            try {
                const apiBooks = await getBooks();
                setBooks(apiBooks);

            } catch (err) {
                setError('Failed to fetch books');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    
    const fetchBookById = async (id: number) => {
        try {
            const book = await getBookById(id); 
            setBook(book);  
        } catch (err) {
            setErrorId('Failed to fetch book');
        }
    };



    return { allBooks, loadingAll, errorAll, fetchBookById, errorId, bookById };
};
