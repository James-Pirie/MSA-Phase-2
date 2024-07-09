import { Book } from '../models/Book';
import config from '../config';

const { apiUrl } = config;

export const getBooks = async (): Promise<Book[]> => {
    // get all books from book table
    const response = await fetch(`${apiUrl}/book`); // use the /books controller of the api to access books
    const data = await response.json();
    return data;
  };