import { useEffect, useState } from 'react';
import { Book } from '../models/Book';
import { getBookById, searchForBooks, getMostReviewedBooks, getHighestRatedBooks, getBookAverageRating } from '../services/BookServices';

export const useBooks = () => {
    const [errorId, setErrorId] = useState<string | null>(null);
    const [bookById, setBook] = useState<Book | null>(null);
    const [bookByIdLoading, setBookByIdLoading] = useState<boolean>(false);

    const [booksBySearch, setBooksBySearch] = useState<Book[] | null>(null);
    const [searchError, setSearchError] = useState<string | null>(null);
    const [searchLoading, setSearchLoading] = useState<boolean>(false);

    const [mostReviewedBooks, setMostReviewedBooks] = useState<Book[]>([]);
    const [mostReviewedError, setMostReviewedError] = useState<string | null>(null);

    const [highestRatedBooks, setHighestRatedBooks] = useState<Book[]>([]);
    const [highestRatedError, setHighestRatedError] = useState<string | null>(null);

    const [bookRatingById, setBookRatingById] = useState<number>(0);
    const [errorBookRatingById, setErrorBookRatingById] = useState<String | null>(null);

    useEffect(() => {
        const fetchMostReviewedBooks = async () => {
            try{
                const books = await getMostReviewedBooks();
                setMostReviewedBooks(books)
            } catch(err){
                setMostReviewedError('Failed to fetch most reviewed books');
            }
        };
        fetchMostReviewedBooks();
    }, []);

    useEffect(() => {
        const fetchHighestRatedBooks = async () => {
            try{
                const books = await getHighestRatedBooks();
                setHighestRatedBooks(books)
            } catch(err){
                setHighestRatedError('Failed to fetch highest rated books');
            }
        };
        fetchHighestRatedBooks();
    }, []);

    const fetchBookById = async (id: number) => {
        setBookByIdLoading(true);
        try {
            const book = await getBookById(id); 
            setBook(book);  
            setBookByIdLoading(false);
        } catch (err) {
            setErrorId('Failed to fetch book');
            setBookByIdLoading(false);
        }
    };

    const fetchBookBySearch = async (searchTerm: string) => {
        setSearchLoading(true);
        setBooksBySearch([]);
        try {
            const books = await searchForBooks(searchTerm);
            setBooksBySearch(books);
        } catch(err){
            setSearchError('Failed to search for book');
        } finally {
            setSearchLoading(false);
        }
    }

    const fetchBookAverageRating = async (bookId: number) => {
        try{
            const bookRating = await getBookAverageRating(bookId);
            setBookRatingById(bookRating.rating);
        } catch(err){
            setErrorBookRatingById("Could not fetch rating for book");
        }
    }

    return { fetchBookById, errorId, bookById, fetchBookBySearch, searchError, booksBySearch, searchLoading, 
             mostReviewedBooks, mostReviewedError, highestRatedBooks, highestRatedError, fetchBookAverageRating,
             bookRatingById, errorBookRatingById, bookByIdLoading };
};
