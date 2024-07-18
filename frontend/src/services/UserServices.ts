import { User } from '../models/User';
import { UserLogin } from '../models/UserLogin';
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
  const response = await fetch(`${apiUrl}/user/id/${userId}`); // use the /users controller of the api to access the book
  const data = await response.json();
  return data;
};

export const authenticateUser = async (username: string, password: string): Promise<string> => {
  // attempt to authenticate with username and password
  const user: UserLogin = { userName: username, password: password };

  const response = await fetch(`${apiUrl}/user/authenticate`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
  });
  
  if (!response.ok) {
      throw new Error('Failed to authenticate');
  }
  
  const data = await response.json();
  return data.token; // token returned from api
};

export const verifyUser = async (token: string): Promise<boolean> => {
  // verify user has a valid token
  console.log(typeof token, token);
  const response = await fetch(`${apiUrl}/user/authorize`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
  });

  if (!response.ok) {
      throw new Error('Failed to verify token');
  }

  const data = await response.json();
  return data.valid;
};