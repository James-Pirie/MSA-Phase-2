import { Author } from '../models/Author';
import config from '../config';

const { apiUrl } = config;

export const getAuthors = async (): Promise<Author[]> => {
    // get all authors from author table
    const response = await fetch(`${apiUrl}/author/all`); // use the /author controller of the api to access books
    const data = await response.json();
    return data;
  };

export const getAuthorById = async (authorId: number): Promise<Author> => {
  // get a book from book table by its id
  const response = await fetch(`${apiUrl}/author/${authorId}`); // use the /authors controller of the api to access the book
  const data = await response.json();
  return data;
};