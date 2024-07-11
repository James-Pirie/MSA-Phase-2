import { useState } from 'react';
import { Review } from '../models/Review';
import { getRandomReview } from '../services/ReviewServices';


export const useReviews = () => {
    const [review, setReview] = useState<Review | null>(null)
    const [error, setErrorId] = useState<String | null>(null)

    
    const fetchRandomReview = async () => {
        try {
            const review = await getRandomReview(); 
            setReview(review);  
        } catch (err) {
            setErrorId('Failed to fetch review');
        }
    };

    return { review, error, fetchRandomReview };
};
