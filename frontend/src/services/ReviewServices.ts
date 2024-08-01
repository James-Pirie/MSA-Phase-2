import { Review } from '../models/Review';
import config from '../config';

const { apiUrl } = config;

export const getRandomReview = async (): Promise<Review> => {
    // get a review randomly from review table
    const response = await fetch(`${apiUrl}/review/random`); 
    const data = await response.json();
    return data;
};

export const getReviewById = async (reviewId: number): Promise<Review> => {
    // get a review from book table by its id
    const response = await fetch(`${apiUrl}/review/${reviewId}`); // use the /reviews controller of the api to access the book
    const data = await response.json();
    return data;
  };

export const getReviewsForBook = async (bookId: number): Promise<Review[]> => {
    // get all reviews for a single book
    const response = await fetch(`${apiUrl}/review/bybook/${bookId}`); 
    const data = await response.json();
    return data;
  };

export const getReviewsForUser = async (userId: number): Promise<Review[]> => {
    // get all reviews written by a user
    const response = await fetch(`${apiUrl}/review/byuser/${userId}`); 
    const data = await response.json();
    return data;
  };


export const pushReview = async (review: Review): Promise<void> => {
    // publish a review
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

export const deleteReview = async (review: Review): Promise<void> => {
    // delete a review
    try {
        const response = await fetch(`${apiUrl}/review/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        });

        if (!response.ok) {
            throw new Error(`Not allowed to delete review: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error deleting review:', error);
    }
};
