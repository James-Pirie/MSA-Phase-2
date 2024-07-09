import { useState, useEffect } from 'react';
import { Book } from '../models/Book';
import { getBooks } from '../services/BookServices';


export const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {

            try {
                const apiBooks = await getBooks();
                setBooks(apiBooks);

            } catch (err) {
                setError('Failed to fetch students');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);


    return { books, loading, error };
};
