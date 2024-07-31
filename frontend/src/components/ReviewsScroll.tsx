import ReviewLink from './ReviewLink';

import { ScrollArea, Text, Center, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Review } from '../models/Review';
import { useResponsive } from '../hooks/useResponsive';

interface ReviewScrollProps {
    reviews: Review[];
}

function ReviewScroll({ reviews }: ReviewScrollProps) {
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
    const [visibleReviews, setVisibleReviews] = useState(8);

    const theme = useMantineTheme();
    const { isSmallScreen } = useResponsive();

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
            { reviews.length == 0 && (
                <Center>
                    <Text
                        mt='15%'
                        size={isSmallScreen? ('5vw'):('3vw')}
                        c={theme.colors.lightGrey[0]}
                    >
                        No Reviews Yet
                    </Text>
                </Center>
            )}
        </ScrollArea>
    )
}

export default ReviewScroll;
