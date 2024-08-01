// styles
import styles from './UserDetails.module.css'

// dependencies 
import { Text, Container, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUsers } from '../hooks/useUsers';

// hooks
import { useReviews } from '../hooks/useReviews';
import useAuth from '../hooks/useAuth'
import { useResponsive } from '../hooks/useResponsive';

// mobile logout button and track scrolling
import ReviewScroll from './ReviewsScroll';
import Logout from './Logout';

function UserDetails() {
    // mobile view checker
    const { isSmallScreen } = useResponsive();
    // userId from parameters
    const { userId } = useParams();
    const { fetchUserById, user } = useUsers();
    const { fetchReviewsForUser, reviewsForUser } = useReviews();
    const { currentUser } = useAuth();

    const [hasFetchedUser, setHasFetchedUser] = useState(false);
    const [hasFetchedReviewsForUser, setHasFetchedReviewsForUser] = useState(false);

    // convert param id to number
    const numericId = Number(userId);
    const theme = useMantineTheme();

    // get user by userId parameter
    useEffect(() => {
        if (!hasFetchedUser ) {
          fetchUserById(numericId);
          setHasFetchedUser(true);
        }
      }, []);

    // get all reviews user has written
    useEffect(() => {
        if (!hasFetchedReviewsForUser) {
            fetchReviewsForUser(numericId);
            setHasFetchedReviewsForUser(true);
        }
    }, []);
    
    return (
        <>
            <div className={styles.smallGreenLine} style={{backgroundColor: theme.colors.brandGreen[0]}}></div>

            <div className={styles.userDetails} style={{backgroundColor: theme.colors.darkGrey[0]}}>
                <Text 
                    fw={700} 
                    size={isSmallScreen? ('6vw'):('2.5vw')}
                    c={theme.colors.brandGreen[0]}
                    mt={isSmallScreen? ('2%'):(undefined)}
                    mb={isSmallScreen? ('2%'):(undefined)}
                    ml={isSmallScreen? ('3%'):(undefined)}

                >
                    {user?.userName}'s Reviews
                </Text>
                {user?.userId == currentUser?.userId && (<Logout/>)}
                
            </div>

            <Container
                pt='0'
                pb='0'
                style={{
                    minWidth: '100vw',
                    minHeight: '82vh',
                    background: theme.other.primaryGradient,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2%',
                    flexDirection: 'column',
                }}
            >
                <ReviewScroll reviews={reviewsForUser}/>
            </Container>
        </>   
    )
}

export default UserDetails;
