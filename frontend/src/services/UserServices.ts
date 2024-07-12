import { User } from '../models/User';
import config from '../config';

const { apiUrl } = config;

export const getUsers = async (): Promise<User[]> => {
    // get all users from user table
    const response = await fetch(`${apiUrl}/user/all`); // use the /user controller of the api to access books
    const data = await response.json();
    return data;
  };

export const getUserById = async (userId: number): Promise<User> => {
  // get a book from book table by its id
  const response = await fetch(`${apiUrl}/user/${userId}`); // use the /users controller of the api to access the book
  const data = await response.json();
  return data;
};