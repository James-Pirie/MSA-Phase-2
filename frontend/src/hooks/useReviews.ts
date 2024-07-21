import { useState } from 'react';
import { Review } from '../models/Review';
import { getRandomReview, getReviewById, getReviewsForBook, pushReview } from '../services/ReviewServices';


export const useReviews = () => {
    const [review, setReview] = useState<Review | null>(null)
    const [error, setErrorId] = useState<String | null>(null)
    const [errorPost, setErrorPost] = useState<String | null>(null)
    const [reviewPosted, setPosted] = useState<Boolean | Boolean>(false)
    const [reviewById, setReviewById] = useState<Review | null>(null)
    const [reviewsForBook, setReviewsForBook] = useState<Review[]>([])


    
    const fetchRandomReview = async () => {
        try {
            const review = await getRandomReview(); 
            setReview(review);  
        } catch (err) {
            setErrorId('Failed to fetch review');
        }
    };

    const postReview = async (newReview: Review) => {
        try {
            console.log('Succesfully Posted Reivew')
            await pushReview(newReview);
            setPosted(true);
        } catch (err) {
            setErrorPost('Failed to post review');
        }
    };
 
    const fetchReviewById = async (id: number) => {
        try {
            const review = await getReviewById(id); 
            setReviewById(review);  
        } catch (err) {
            setErrorId('Failed to fetch review');
        }
    };

    const fetchReviewsForBook = async (bookId: number) => {
        try {
            const reviews = await getReviewsForBook(bookId); 
            setReviewsForBook(reviews);  
        } catch (err) {
            setErrorId('Failed to fetch reviews');
        }
    };

    return { review, error, fetchRandomReview, reviewPosted, errorPost, postReview, fetchReviewById, reviewById, fetchReviewsForBook, reviewsForBook};
};

