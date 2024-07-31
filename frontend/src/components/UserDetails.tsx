import styles from './UserDetails.module.css'

import { Text, Container, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUsers } from '../hooks/useUsers';
import { useReviews } from '../hooks/useReviews';
import useAuth from '../hooks/useAuth'
import { useResponsive } from '../hooks/useResponsive';

import ReviewScroll from './ReviewsScroll';
import Logout from './Logout';

function UserDetails() {
    const { isSmallScreen } = useResponsive();
    const { userId } = useParams();
    const { fetchUserById, user } = useUsers();
    const { fetchReviewsForUser, reviewsForUser } = useReviews();
    const { currentUser } = useAuth();


    const [hasFetchedUser, setHasFetchedUser] = useState(false);
    const [hasFetchedReviewsForUser, setHasFetchedReviewsForUser] = useState(false);

    const numericId = Number(userId);
    const theme = useMantineTheme();


    useEffect(() => {
        if (!hasFetchedUser ) {
          fetchUserById(numericId);
          setHasFetchedUser(true);
        }
      }, []);

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
