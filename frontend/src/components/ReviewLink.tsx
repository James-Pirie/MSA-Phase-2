import '../styles/colours.css';
import './ReviewLink.moduel.css';


import { useReviews } from '../hooks/useReviews';
import { useUsers } from '../hooks/useUsers'
import { useEffect, useState } from 'react';
import { Text, Rating, Flex, Button } from '@mantine/core';

import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { deleteReview } from '../services/ReviewServices';

interface ReviewLinkProp {
    reviewId: number;
}

function ReviewLink({ reviewId }: ReviewLinkProp) {
    const { fetchReviewById, reviewById } = useReviews();
    const { fetchUserById, user } = useUsers();
    const { currentUser } = useAuth();


    const [hasFetchedReview, setHasFetchedReview] = useState<boolean>(false);
    const [hasFetchedUser, setHasFetchedUser] = useState(false);


    useEffect(() => {
        if (reviewId && !hasFetchedReview) {
            fetchReviewById(reviewId);
            setHasFetchedReview(true);
        }
    }, [reviewId, hasFetchedReview, fetchReviewById]);

    // Fetch the user associated with the review
    useEffect(() => {
        if (reviewById?.userId && !hasFetchedUser) {
        fetchUserById(reviewById.userId);
        setHasFetchedUser(true);
        }
    }, [reviewById?.userId, hasFetchedUser, fetchUserById]);

    // post review when button clicked
    const handleDelete = async () => {
        if (reviewById != null && reviewById.userId == currentUser?.userId) {
            await deleteReview(reviewById);
        }
    };

    return (
        <div className='review-link-container light-grey'>
            <Flex justify="space-between" align="center" style={{ width: '100%' }}>
                <Rating className="rating" color="var(--colour-primary)" value={reviewById?.rating} readOnly size="xl"/>

                {currentUser?.userId == reviewById?.userId ? (
                    <Button

                        variant='outline'
                        color='var(--colour-primary)'
                        onClick={handleDelete} 
                        disabled={currentUser === null}
                    >
                        Delete Your Review
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
