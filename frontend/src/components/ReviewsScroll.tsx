import '../styles/colours.css'

import { ScrollArea  } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Review } from '../models/Review';

import ReviewLink from './ReviewLink';

interface ReviewScrollProps {
    reviews: Review[];
}


function ReviewScroll({ reviews }: ReviewScrollProps) {
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
    const [visibleReviews, setVisibleReviews] = useState(8);


    // update visible reviews when scroll position changes
    useEffect(() => {
        if (scrollPosition.y >= 200) {
            setVisibleReviews((previous) => previous + 2);
        }
    }, [scrollPosition.y]);

    return (
        <ScrollArea
            w='100%'
            h='80vh'
            onScrollPositionChange={setScrollPosition}>
            {reviews.slice(0, visibleReviews).map((review) => (
                <ReviewLink key={review.reviewId ?? 0} reviewId={review.reviewId ?? 0} />
            ))}
        </ScrollArea>
    )
}

export default ReviewScroll;
