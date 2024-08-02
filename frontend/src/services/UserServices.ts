import { User } from '../models/User';
import { UserLogin } from '../models/UserLogin';
import config from '../config';

const { apiUrl } = config;

export const getUsers = async (): Promise<User[]> => {
    // get all users from user table
    const response = await fetch(`${apiUrl}/user/all`); 
    const data = await response.json();
    return data;
};

export const getUserById = async (userId: number): Promise<User> => {
  // get a user from user table by its id
  const response = await fetch(`${apiUrl}/user/id/${userId}`);
  const data = await response.json();
  return data;
};

export const getUserByUsername = async (username: String): Promise<User> => {
  // get a book from user table by username
  const response = await fetch(`${apiUrl}/user/username/${username}`);
  const data = await response.json();
  return data;
};

export const registerUser = async (username :string, password: string): Promise<void> => {
  // register a user
  // create user object
  const newUser: UserLogin = { userName: username, password: password };
  
  // attempt to post to database
  const response = await fetch(`${apiUrl}/user/register`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  });

  if (!response.ok) {
    throw new Error('Failed to register');
  }
}

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

export const getCurrentUsername = async (token: string): Promise<string | null> => {
  // find a user based on a username
  try {
    const response = await fetch(`${apiUrl}/user/authorize/username`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error('No Token Found');
      } else if (response.status === 401) {
        throw new Error('No Username Found');
      } else {
        throw new Error('Unexpected Error');
      }
    }

    const username = await response.text();

    return username || null;

  } catch (error) {
    console.error('Error fetching username:', error);
    return null;
  }
};