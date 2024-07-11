import { Book } from '../models/Book';
import config from '../config';

const { apiUrl } = config;

export const getBooks = async (): Promise<Book[]> => {
    // get all books from book table
    const response = await fetch(`${apiUrl}/book/all`); // use the /books controller of the api to access books
    const data = await response.json();
    return data;
  };

export const getBookById = async (bookId: number): Promise<Book> => {
  // get a book from book table by its id
  const response = await fetch(`${apiUrl}/book/${bookId}`); // use the /books controller of the api to access the book
  const data = await response.json();
  return data;
};