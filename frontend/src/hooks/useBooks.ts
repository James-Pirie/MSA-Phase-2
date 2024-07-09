import { useState, useEffect } from 'react';
import { Book } from '../models/Book';
import { getBooks } from '../api/BookServices';

interface UseBooksReturnType {
    books: Book[];
    loading: boolean;
    error: string | null;
}

export const useBooks = (): UseBooksReturnType => {
    // book states
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const books = await getBooks();
                setBooks(books);
            } catch (err) {
                setError('Failed to fetch books');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return { books, loading, error };
};
