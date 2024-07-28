import '../styles/colours.css'
import './UserDetails.moduel.css'

import { Text, Container } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUsers } from '../hooks/useUsers';
import { useReviews } from '../hooks/useReviews';
import { useResponsive } from '../hooks/useResponsive';

import ReviewScroll from './ReviewsScroll';
import Logout from './Logout';

function UserDetails() {
    const { isSmallScreen } = useResponsive();
    const { userId } = useParams();
    const { fetchUserById, user } = useUsers();
    const { fetchReviewsForUser, reviewsForUser } = useReviews();

    const [hasFetchedUser, setHasFetchedUser] = useState(false);
    const [hasFetchedReviewsForUser, setHasFetchedReviewsForUser] = useState(false);
    const numericId = Number(userId);

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
            <div className='small-green-line brand-colour'></div>

            <div className='light-grey user-details'>
                <Text 
                    fw={700} 
                    size={isSmallScreen? ('6vw'):('2.5vw')}
                    c='var(--colour-primary)'
                    mt={isSmallScreen? ('2%'):(undefined)}
                    mb={isSmallScreen? ('2%'):(undefined)}
                    ml={isSmallScreen? ('3%'):(undefined)}

                >
                    {user?.userName}'s Reviews
                </Text>
                <Logout/>
            </div>

            <Container
                pt='0'
                pb='0'
                style={{
                    minWidth: '100vw',
                    minHeight: '82vh',
                    background: 'linear-gradient(to right, var(--colour-primary-gradient), var(--colour-secondary-gradient))',
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
