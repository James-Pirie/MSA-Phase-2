import './ReviewLink.moduel.css'; 

import { useReviews } from '../hooks/useReviews';
import { useUsers } from '../hooks/useUsers';
import { useEffect, useState } from 'react';
import { Text, Rating, Flex, Button, useMantineTheme } from '@mantine/core';

import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { deleteReview } from '../services/ReviewServices';
import { useResponsive } from '../hooks/useResponsive';


interface ReviewLinkProp {
    reviewId: number;
}

function ReviewLink({ reviewId }: ReviewLinkProp) {
    const { fetchReviewById, reviewById } = useReviews();
    const { fetchUserById, user } = useUsers();
    const { currentUser } = useAuth();
    const { isSmallScreen } = useResponsive();

    const [hasFetchedReview, setHasFetchedReview] = useState<boolean>(false);
    const [hasFetchedUser, setHasFetchedUser] = useState(false);
    const [isDeleted, setIsDeleted] = useState<boolean>(false); 

    const theme = useMantineTheme();

    useEffect(() => {
        if (reviewId && !hasFetchedReview) {
            fetchReviewById(reviewId);
            setHasFetchedReview(true);
        }
    }, [reviewId, hasFetchedReview, fetchReviewById]);

    useEffect(() => {
        if (reviewById?.userId && !hasFetchedUser) {
            fetchUserById(reviewById.userId);
            setHasFetchedUser(true);
        }
    }, [reviewById?.userId, hasFetchedUser, fetchUserById]);

    const handleDelete = async () => {
        if (reviewById != null && reviewById.userId === currentUser?.userId) {
            await deleteReview(reviewById);
            setIsDeleted(true); 
        }
    };

    if (isDeleted) return null;

    return (
        <div 
            className={isSmallScreen ? ('review-link-container-mobile'):('review-link-container')}   
            style={{backgroundColor: theme.colors.darkGrey[0]}}               
>
            <Flex justify="space-between" align="center" style={{ width: '100%' }}>
                <Rating className="rating" color={theme.colors.ratingGreen[0]} value={reviewById?.rating} readOnly size="xl" />

                {currentUser?.userId === reviewById?.userId ? (
                    <Button
                        variant='outline'
                        color={theme.colors.brandGreen[0]}
                        onClick={handleDelete}
                        disabled={currentUser === null}
                    >
                        {isSmallScreen ? ('Delete'):('Delete Your Review')}
                        
                    </Button>
                ) : (
                    <Link 
                        to={`/profile/${user?.userId}`}  
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <Text 
                            className='written-by'
                            c={theme.colors.brandGreen[0]}>
                            Written By {user?.userName}
                        </Text>
                    </Link>
                )}
            </Flex>
            <Text c={theme.colors.lightGrey[0]}>{reviewById?.description}</Text>
        </div>
    );
}

export default ReviewLink;
