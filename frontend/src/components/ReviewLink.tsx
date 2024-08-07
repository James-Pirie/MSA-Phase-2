// style
import styles from './ReviewLink.module.css'; 

import { useReviews } from '../hooks/useReviews';
import { useUsers } from '../hooks/useUsers';
import { useEffect, useState } from 'react';
import { Text, Rating, Flex, Button, useMantineTheme } from '@mantine/core';

import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { deleteReview } from '../services/ReviewServices';
import { useResponsive } from '../hooks/useResponsive';

// take in reviewId as prop
interface ReviewLinkProp {
    reviewId: number;
}

// 
function ReviewLink({ reviewId }: ReviewLinkProp) {
    const { fetchReviewById, reviewById } = useReviews();
    const { fetchUserById, user } = useUsers();
    const { currentUser } = useAuth(); // get current logged in user
    const { isSmallScreen } = useResponsive(); // mobile checker

    const [hasFetchedReview, setHasFetchedReview] = useState<boolean>(false);
    const [hasFetchedUser, setHasFetchedUser] = useState(false);
    const [isDeleted, setIsDeleted] = useState<boolean>(false); 

    const theme = useMantineTheme(); // theme checker

    // get review by reviewId param
    useEffect(() => {
        if (reviewId && !hasFetchedReview) {
            fetchReviewById(reviewId);
            setHasFetchedReview(true);
        }
    }, [reviewId, hasFetchedReview, fetchReviewById]);

    // get user who wrote review
    useEffect(() => {
        if (reviewById?.userId && !hasFetchedUser) {
            fetchUserById(reviewById.userId);
            setHasFetchedUser(true);
        }
    }, [reviewById?.userId, hasFetchedUser, fetchUserById]);

    // delete review if user who wrote it wishes
    const handleDelete = async () => {
        if (reviewById != null && reviewById.userId === currentUser?.userId) {
            await deleteReview(reviewById);
            setIsDeleted(true); 
        }
    };

    // hide when user deletes
    if (isDeleted) return null;

    return (
        <div 
            className={isSmallScreen ? (styles.reviewLinkContainerMobile):(styles.reviewLinkContainer)}   
            style={{backgroundColor: theme.colors.darkGrey[0]}}               
>
            <Flex justify="space-between" align="center" style={{ width: '100%' }}>
                <Rating color={theme.colors.ratingGreen[0]} value={reviewById?.rating} readOnly size="xl" />

                {currentUser?.userId === reviewById?.userId ? (
                    <Button
                        aria-label={`Delete your review button`}
                        variant='outline'
                        color={theme.colors.brandGreen[0]}
                        onClick={handleDelete}
                        disabled={currentUser === null}
                    >
                        {isSmallScreen ? ('Delete'):('Delete Your Review')}
                        
                    </Button>
                ) : (
                    <Link 
                        aria-label={`Link to ${user?.userName} profile`}
                        to={`/profile/${user?.userId}`}  
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <Text 
                            c={theme.colors.brandGreen[0]}>
                            Written By {user?.userName}
                        </Text>
                    </Link>
                )}
            </Flex>
            <Link 
                aria-label='link to book review is about'
                to={`/books/${reviewById?.bookId}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
                <Text c={theme.colors.lightGrey[0]}>{reviewById?.description}</Text>
            </Link>
        </div>
    );
}

export default ReviewLink;
