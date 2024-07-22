import { useState } from 'react';
import { Book } from '../models/Book';
import { getBookById, searchForBooks } from '../services/BookServices';

export const useBooks = () => {
    const [errorId, setErrorId] = useState<string | null>(null);
    const [bookById, setBook] = useState<Book | null>(null);
    const [booksBySearch, setBooksBySearch] = useState<Book[] | null>(null);
    const [searchError, setSearchError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchBookById = async (id: number) => {
        try {
            const book = await getBookById(id); 
            setBook(book);  
        } catch (err) {
            setErrorId('Failed to fetch book');
        }
    };

    const fetchBookBySearch = async (searchTerm: string) => {
        setLoading(true);
        setBooksBySearch([]);
        try {
            const books = await searchForBooks(searchTerm);
            setBooksBySearch(books);
        } catch(err){
            setSearchError('Failed to search for book');
        } finally {
            setLoading(false);
        }
    }

    return { fetchBookById, errorId, bookById, fetchBookBySearch, searchError, booksBySearch, loading };
};
