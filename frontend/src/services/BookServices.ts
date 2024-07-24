import { Book } from '../models/Book';
import { BookRating } from '../models/BookRating';

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

export const searchForBooks = async (seachTerm: string): Promise<Book[]> => {
  // use a search term to find a book with the search term in the title
  const response = await fetch(`${apiUrl}/book/search/${seachTerm}`);
  const data = await response.json();
  return data;
}

export const getMostReviewedBooks = async (): Promise<Book[]> => {
  // get eight of the most reviewed books
  const response = await fetch(`${apiUrl}/book/reccomendation/mostreviewed`);
  const data = await response.json();
  return data;
}

export const getHighestRatedBooks = async (): Promise<Book[]> => {
  // get eight of the highest rated books
  const response = await fetch(`${apiUrl}/book/reccomendation/highestrated`);
  const data = await response.json();
  return data;
}

export const getBookAverageRating = async (bookId: number): Promise<BookRating> => {
  const response = await fetch(`${apiUrl}/book/rating/${bookId}`);
  const data = await response.json();
  return data;

}