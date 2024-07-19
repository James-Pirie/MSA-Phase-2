import { Review } from '../models/Review';
import config from '../config';

const { apiUrl } = config;

export const getRandomReview = async (): Promise<Review> => {
    // get a review randomly from review table
    const response = await fetch(`${apiUrl}/review/random`); 
    const data = await response.json();
    return data;
};


export const pushReview = async (review: Review): Promise<void> => {
    try {
        const response = await fetch(`${apiUrl}/review/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        });

        if (!response.ok) {
            throw new Error(`Not allowed to post review: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error posting review:', error);
    }
};