import styles from './WriteReview.module.css';

import { Flex, Text, Image, Textarea, Rating, CloseButton, Button, Notification, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import { Link } from 'react-router-dom';
import { useReviews } from '../hooks/useReviews';
import useAuth from '../hooks/useAuth';
import { Review } from '../models/Review';
import { useParams } from 'react-router-dom';
import { useResponsive } from '../hooks/useResponsive';

function WriteReview() {
    const theme = useMantineTheme();
    const { isSmallScreen } = useResponsive();


    // book id parsed in through url
    // test with example 209770
    const { bookid } = useParams();
    const numericId = Number(bookid);

    // define constants
    const [hasFetchedBook, setHasFetchedBook] = useState(false);
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState<number | null>(null);
    const [alreadyReviewed, setAlreadyReviewed] = useState(false);
    const [hasFetchedReviewsForUser, setHasFetchedReviewsForUser] = useState(false);


    // get constants from hooks
    const { fetchBookById, bookById } = useBooks();
    const { reviewPosted, postReview, reviewsForUser, fetchReviewsForUser } = useReviews();
    const { currentUser, authenticated } = useAuth();

    // get the book being reviewed
    useEffect(() => {
        if (!hasFetchedBook) {
            fetchBookById(numericId);
            setHasFetchedBook(true);
        }
    }, [hasFetchedBook, fetchBookById]);

    // get the current users reviews
    useEffect(() => {
        if (!hasFetchedReviewsForUser && currentUser != null) {
            fetchReviewsForUser(currentUser?.userId);
            reviewsForUser
            setHasFetchedReviewsForUser(true);
        }
    }, [hasFetchedBook, bookById, currentUser]);

    useEffect(() => {
        if (hasFetchedReviewsForUser && reviewsForUser.length > 0) {
            reviewsForUser.forEach(review => 
            {
                if (review.bookId === numericId){
                    setAlreadyReviewed(true);
                }
            });
        }
    }, [hasFetchedReviewsForUser, reviewsForUser]);

    // post review when button clicked
    const handlePostReview = async () => {
        console.log(currentUser);
        if (rating != null && description !== '' && bookById != null && currentUser != null && !reviewPosted) {
            // define review
            const newReview: Review = {
                bookId: bookById.bookId,
                userId: currentUser.userId,
                rating: rating,
                description: description
            };
            await postReview(newReview);
        } else {
            console.log('Invalid Review');
        }
    };

    // render page
    return (
        <>
            {alreadyReviewed && (
            <Notification
                ml='1%'
                color={theme.colors.mediumGrey[0]}
                mr='1%'
                style={{
                    backgroundColor: theme.colors.brandGreen[0],
                    fontWeight: 'bold',
                }}
                className={styles.customNotification} 
            >
                Already reviewed {bookById?.bookName}, delete your old review in your profile first
            </Notification>
            )}
            <div className={styles.writeReviewContainer} style={{backgroundColor: theme.colors.darkGrey[0]}}>
                <Flex>
                    {!isSmallScreen && (
                        <Link 
                            aria-label={`Link to ${bookById?.bookName} page`}
                            to={`/books/${bookById?.bookId}`} 
                            style={{ textDecoration: 'none' }}>
                            <Image src={bookById?.coverImageL} />
                        </Link>
                    )}

                    <div className={styles.writeReviewForm}>
                        <Flex justify='space-between' align='center'>
                            <Text c={theme.colors.brandGreen[0]} fw={700} size={isSmallScreen ? ('5vw'):('2.5vw')}>
                                {bookById?.bookName}
                            </Text>
                            
                            <Link 
                                to={`/books/${bookById?.bookId}`}
                                state={{ fromBackButton: true }}
                                aria-label={`Link to ${bookById?.bookName} page`}
                            >
                                <CloseButton size='xl' />
                            </Link>

                        </Flex>

                        {!isSmallScreen && (
                            <Rating 
                                aria-label='rate book input'
                                className={styles.ratingInput}
                                color={theme.colors.ratingGreen[0]}
                                size='xl'    
                                mb='1%'
                                onChange={(value) => setRating(value)} 
                                readOnly={!authenticated || alreadyReviewed} 
                            />
                        )}
                        <Textarea
                            onChange={(e) => setDescription(e.target.value)} 
                            aria-label='Review Content Input'
                            placeholder='Write Review'
                            withAsterisk
                            rows={15}
                            disabled={!authenticated || alreadyReviewed}
                            styles={() => ({
                                input: {
                                    backgroundColor: theme.colors.mediumGrey[0],
                                    borderColor: theme.colors.lightGrey[0],
                                    color: theme.colors.lightGrey[0],
                                    '::placeholder': {
                                        color: theme.colors.lightGrey[0],
                                    },
                                }
                            })}
                        />
                        <Flex justify={isSmallScreen ? ('space-between'):('flex-end')}>
                            {isSmallScreen && (
                                <Rating 
                                    aria-label='rate book input'
                                    className={styles.ratingInput}
                                    color={theme.colors.ratingGreen[0]}
                                    size='xl'    
                                    mb='1%'
                                    onChange={(value) => setRating(value)} 
                                    readOnly={!authenticated || alreadyReviewed} 
                                />
                            )}  
                            
                            <Link to={`/books/${bookById?.bookId}`}>
                                <Button 
                                    aria-label='post review button'
                                    onClick={handlePostReview} 
                                    mt='1%' 
                                    size='md' 
                                    variant="outline"
                                    color={theme.colors.brandGreen[0]}
                                    disabled={!authenticated || alreadyReviewed}
                                >
                                    Post Review
                                </Button>
                            </Link>
                        </Flex>
                    </div>
                </Flex>
            </div>



            
        </>
    );
}

export default WriteReview;
