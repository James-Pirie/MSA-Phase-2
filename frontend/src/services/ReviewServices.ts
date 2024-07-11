import { Review } from '../models/Review';
import config from '../config';

const { apiUrl } = config;

export const getRandomReview = async (): Promise<Review> => {
    // get a review randomly from review table
    const response = await fetch(`${apiUrl}/review/random`); 
    const data = await response.json();
    return data;
};