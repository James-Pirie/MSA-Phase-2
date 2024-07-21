import '../styles/colours.css';
import './ReviewLink.moduel.css';


import { useReviews } from '../hooks/useReviews';
import { useUSers } from '../hooks/useUsers'
import { useEffect, useState } from 'react';
import { Text, Rating, Flex } from '@mantine/core';


interface ReviewLinkProp {
    reviewId: number;
}

function ReviewLink({ reviewId }: ReviewLinkProp) {
    const { fetchReviewById, reviewById } = useReviews();
    const { fetchUserById, user } = useUSers();

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

    return (
        <div className='review-link-container light-grey'>
            <Flex justify="space-between" align="center" style={{ width: '100%' }}>
                <Rating className="rating" color="var(--colour-primary)" value={reviewById?.rating} readOnly size="xl"/>
                <Text className='written-by brand-colour-fonts'>Written By {user?.userName}</Text>

            </Flex>
            <Text className='lighter-grey-font'>{reviewById?.description}</Text>
        </div>
    );
}

export default ReviewLink;
