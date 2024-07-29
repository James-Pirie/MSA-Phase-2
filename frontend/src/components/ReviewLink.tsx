import './ReviewLink.moduel.css'; 

import { useReviews } from '../hooks/useReviews';
import { useUsers } from '../hooks/useUsers';
import { useEffect, useState } from 'react';
import { Text, Rating, Flex, Button } from '@mantine/core';

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
        <div className={isSmallScreen ? ('review-link-container-mobile light-grey'):('review-link-container light-grey')}                  
>
            <Flex justify="space-between" align="center" style={{ width: '100%' }}>
                <Rating className="rating" color="var(--colour-primary)" value={reviewById?.rating} readOnly size="xl" />

                {currentUser?.userId === reviewById?.userId ? (
                    <Button
                        variant='outline'
                        color='var(--colour-primary)'
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
                        <Text className='written-by brand-colour-fonts'>
                            Written By {user?.userName}
                        </Text>
                    </Link>
                )}
            </Flex>
            <Text className='lighter-grey-font'>{reviewById?.description}</Text>
        </div>
    );
}

export default ReviewLink;
