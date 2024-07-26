import '../styles/colours.css';
import './WriteReview.moduel.css';

import { Flex, Text, Image, Textarea, Rating, CloseButton, Button, Notification } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import { Link, useParams } from 'react-router-dom';
import { useReviews } from '../hooks/useReviews';

import useAuth from '../hooks/useAuth';
import { Review } from '../models/Review';

function WriteReview() {
    const { bookid, reviewId } = useParams();
    const numericBookId = Number(bookid);
    const numericReviewId = Number(reviewId);
    
    const [hasFetchedBook, setHasFetchedBook] = useState(false);
    const [hasFetchedReview, setHasFetchedReview] = useState(false);
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState<number | null>(null);
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);

    const { fetchBookById, bookById } = useBooks();
    const { reviewPosted, postReview, deleteReview, fetchReviewById, reviewById } = useReviews();
    const { currentUser, authenticated } = useAuth();

    // get the book being reviewed
    useEffect(() => {
        if (!hasFetchedBook) {
            fetchBookById(numericBookId);
            setHasFetchedBook(true);
        }
    }, [hasFetchedBook, fetchBookById, numericBookId]);

    // notify user when review posted succesfully 
    useEffect(() => {
        if (reviewPosted) {
            setShowSuccessNotification(true);
            setTimeout(() => setShowSuccessNotification(false), 3000);   
        }
    }, [reviewPosted]);

    // if user has already reviewed book, fetch the review to be edited
    useEffect(() => {
        if (!hasFetchedReview)
            fetchReviewById(numericReviewId);
            setHasFetchedReview(true);
    }, [])
    
    const handlePostReview = async () => {
        if (rating != null && description !== '' && bookById != null && currentUser != null) {
            // define review
            const newReview: Review = {
                bookId: bookById.bookId,
                userId: currentUser.userId,
                rating: rating,
                description: description
            };

            if (reviewById?.userId == currentUser.userId){
                console.log('here')
                deleteReview(reviewById);   
            }

            await postReview(newReview);
        } else {
            console.log('Invalid Review');
        }
    };

    const handleDeleteReview = async () => {
        if (reviewById?.userId == currentUser?.userId && reviewById != null){
            deleteReview(reviewById)
        }
    }

    return (
        <>
            {showSuccessNotification && (
                <Notification
                    ml='1%'
                    color='var(--colour-primary-gradient)'
                    mr='1%'
                    style={{
                        backgroundColor: 'var(--colour-primary)',
                        fontWeight: 'bold',
                    }}
                    onClose={() => setShowSuccessNotification(false)}
                >
                    Successfully Posted Review
                </Notification>
            )}
            <div className='write-review-container light-grey'>
                <Flex>
                    <Link to={`/books/${bookById?.bookId}`} style={{ textDecoration: 'none' }}>
                        <Image src={bookById?.coverImageL} />
                    </Link>
                    <div className='write-review-form'>
                        <Flex justify='space-between' align='center'>
                            <Text className='brand-colour-fonts' fw={700} size='2.5vw'>
                                {bookById?.bookName}
                            </Text>
                            <Link to={`/books/${bookById?.bookId}`} state={{ fromBackButton: true }}>
                                <CloseButton size='xl' />
                            </Link>
                        </Flex>

                        {reviewById?.reviewId == null ? (
                        <>
                            <Rating 
                                className='rating-input'
                                color='var(--colour-primary)'
                                size='xl'
                                mb='1%'
                                onChange={(value) => setRating(value)}
                                readOnly={!authenticated}
                            />
                            <Textarea
                                onChange={(e) => setDescription(e.target.value)}
                                aria-label='Review Content Input'
                                placeholder='Write Review'
                                withAsterisk
                                rows={15}
                                disabled={!authenticated}
                                styles={() => ({
                                    input: {
                                        backgroundColor: 'var(--colour-primary-gradient)',
                                        borderColor: 'var(--lighter-grey)',
                                        color: 'var(--lighter-grey)',
                                        '::placeholder': {
                                            color: 'var(--lighter-grey)',
                                        },
                                    }
                                })}
                            />
                            <Flex justify='flex-end'>
                                <Link to={`/profile/${currentUser?.userId}`}>
                                    <Button 
                                        onClick={handlePostReview}
                                        mt='1%'
                                        size='md'
                                        variant="outline"
                                        color='var(--colour-primary)'
                                        disabled={!authenticated}
                                    >
                                        Post Review
                                    </Button>
                                </Link>
                            </Flex>
                        </>
                        ):(
                        <>
                            <Rating 
                                className='rating-input'
                                color='var(--colour-primary)'
                                size='xl'
                                mb='1%'
                                value={reviewById.rating}
                                onChange={(value) => setRating(value)}
                                readOnly={!authenticated}
                            />
                            <Textarea
                                onChange={(e) => setDescription(e.target.value)}
                                aria-label='Review Content Input'
                                placeholder='Write Review'
                                withAsterisk
                                value={reviewById.description}
                                rows={13}
                                disabled={!authenticated}
                                styles={() => ({
                                    input: {
                                        backgroundColor: 'var(--colour-primary-gradient)',
                                        borderColor: 'var(--lighter-grey)',
                                        color: 'var(--lighter-grey)',
                                        '::placeholder': {
                                            color: 'var(--lighter-grey)',
                                        },
                                    }
                                })}
                            />
                            <Flex justify='flex-end'>

                                <Link to={`/books/${bookById?.bookId}`}>
                                    <Button 
                                        onClick={handlePostReview}
                                        size='md'
                                        variant="outline"
                                        color='var(--colour-primary)'
                                        disabled={!authenticated}
                                    >
                                        Delete Review
                                    </Button>
                                </Link>
                                
                                <Link to={`/profile/${currentUser?.userId}`}>
                                    <Button 
                                        onClick={handleDeleteReview}
                                        size='md'
                                        variant="outline"
                                        color='var(--colour-primary)'
                                        disabled={!authenticated}
                                    >
                                        Save Edit
                                    </Button>
                                </Link>
                            </Flex>
                        </>
                        )}

                        
                    </div>
                </Flex>
            </div>
        </>
    );
}

export default WriteReview;
