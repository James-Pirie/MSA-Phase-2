import { useState } from 'react';
import { Review } from '../models/Review';
import { getRandomReview, getReviewById, getReviewsForBook, pushReview, popReview, getReviewsForUser } from '../services/ReviewServices';


export const useReviews = () => {
    const [review, setReview] = useState<Review | null>(null)
    const [error, setErrorId] = useState<String | null>(null)
    const [errorPost, setErrorPost] = useState<String | null>(null)
    const [errorDelete, setErrorDelete] = useState<String | null>(null)

    const [reviewPosted, setPosted] = useState<Boolean | Boolean>(false)
    const [reviewById, setReviewById] = useState<Review | null>(null)
    const [reviewsForBook, setReviewsForBook] = useState<Review[]>([])
    const [reviewsForUser, setReviewsForUser] = useState<Review[]>([])

    const [randomReviewLoading, setRandomReviewLoading] = useState<boolean>(false);
    
    const fetchRandomReview = async () => {
        setRandomReviewLoading(true)
        try {
            const review = await getRandomReview(); 
            setReview(review);  
            setRandomReviewLoading(false)
        } catch (err) {
            setErrorId('Failed to fetch review');
            setRandomReviewLoading(false)
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

    const deleteReview = async (review: Review) => {
        try {
            await popReview(review);
            console.log('Succesfully Deleted Reivew')
        } catch (err) {
            setErrorDelete('Failed to delete review');
        }
    };
 
    const fetchReviewById = async (id: number) => {
        try {
            const review = await getReviewById(id); 
            console.log(review)
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

    const fetchReviewsForUser = async (userId: number) => {
        try {
            const reviews = await getReviewsForUser(userId); 
            setReviewsForUser(reviews);  
        } catch (err) {
            setErrorId('Failed to fetch reviews');
        }
    };

    return { review, error, fetchRandomReview, reviewPosted, errorPost, postReview, 
        fetchReviewById, reviewById, fetchReviewsForBook, reviewsForBook, randomReviewLoading, 
        fetchReviewsForUser, reviewsForUser, errorDelete, deleteReview };
};

