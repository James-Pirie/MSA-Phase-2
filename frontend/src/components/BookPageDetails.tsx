import './BookPageDetails.moduel.css';

import ReviewScroll from './ReviewsScroll';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import { Image, Text, Container, Flex, CloseButton, Button, Rating, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useAuthors } from '../hooks/useAuthors';
import { useReviews } from '../hooks/useReviews';
import { useResponsive } from '../hooks/useResponsive';
import useAuth from '../hooks/useAuth';


function BookPageDetails() {
    // book id parsed in through url
    const { bookid } = useParams();
    const { authenticated } = useAuth()
    const numericId = Number(bookid);
    const { fetchAuthorById, author } = useAuthors();
    const { fetchBookById, bookById, fetchBookAverageRating, bookRatingById } = useBooks();
    const { fetchReviewsForBook, reviewsForBook } = useReviews();
    const { isSmallScreen } = useResponsive();

    const [hasFetchedBook, setHasFetchedBook] = useState(false);
    const [hasFetchedAverageRating, setHasFetchedAverageRating] = useState(false);
    const [hasFetchedAuthor, setHasFetchedAuthor] = useState(false);
    const [hasFetchedReviewsForBook, setHasFetchedReviewsForBook] = useState(false);

    // get the book from the bookid param
    useEffect(() => {
        if (!hasFetchedBook) {
            fetchBookById(numericId);
            setHasFetchedBook(true);
        }
    }, []);

    // Fetch the author of the book
    useEffect(() => {
        if (bookById?.authorId && !hasFetchedAuthor) {
            fetchAuthorById(bookById.authorId);
            setHasFetchedAuthor(true);
        }
    }, [bookById, hasFetchedBook]);

    // get the reviews for the bookid param
    useEffect(() => {
        if (!hasFetchedReviewsForBook) {
            fetchReviewsForBook(numericId);
            setHasFetchedReviewsForBook(true);
        }
    }, [hasFetchedBook]);



    useEffect(() => {
        if (!hasFetchedAverageRating && bookById != null) {
            fetchBookAverageRating(bookById?.bookId)
            setHasFetchedAverageRating(true);
        }
    }, [bookById]);


    return (
        <>
            <div className='small-green-line brand-colour'></div>
            <div className='title light-grey'>
                <Flex justify='space-between' align='center'>
                    <Stack 
                        gap="0"
                        w='100%'>
                        <Text 
                            className='brand-colour-fonts' 
                            fw={700} 
                            size={isSmallScreen ? ('6vw'):('2.5vw')} 
                            lineClamp={1}
                            pl={isSmallScreen ? ('5%'):(undefined)}
                        >
                            {bookById?.bookName} ({bookById?.year})
                        </Text>

                        {isSmallScreen && (
                        <Rating 
                            ml='5%'
                            mt='0%' 
                            color="var(--colour-primary" 
                            value={bookRatingById} 
                            readOnly 
                            size="5vw" />
                        )}
                    </Stack>

                    <Link className='close-button' to='/books' state={{ fromBackButton: true }}>
                        <CloseButton size='xl' />
                    </Link>
                </Flex>


            </div>

            {isSmallScreen ? (
                <Container
                    style={{
                        minWidth: '80%',
                        minHeight: '80vh',
                        background: 'linear-gradient(to left, var(--colour-primary-gradient), var(--colour-secondary-gradient))',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ReviewScroll reviews={reviewsForBook}/>

                </Container>
            ):(
                <Flex>
                    <div className='book-details-sidebar light-grey'>
                        <Image src={bookById?.coverImageL} width='100%' />

                        <Rating mt='5%' color="var(--colour-primary" value={bookRatingById} readOnly size="2vw" />

                        <Text className='brand-colour-fonts author-name' fw={600} size='1.5vw'>
                            By {author?.authorName && author.authorName
                                .toLowerCase()
                                .split(' ')
                                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                                .join(' ')}
                        </Text>


                        <Text className='brand-colour-fonts author-name' fw={600} size='1.5vw'>
                            Published {bookById?.year}
                        </Text>
                    </div>

                    <Container
                        style={{
                            minWidth: '80%',
                            minHeight: '80vh',
                            background: 'linear-gradient(to left, var(--colour-primary-gradient), var(--colour-secondary-gradient))',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ReviewScroll reviews={reviewsForBook}/>

                    </Container>
                </Flex>
            )}

            <Link to={authenticated ? (`/books/${bookById?.bookId}`): ('/login')}>
                <Button
                    c="var(--colour-primary-gradient)"
                    color='var(--colour-primary)'
                    variant="filled"
                    size="lg"
                    radius='lg'
                    style={{
                        position: 'fixed',
                        bottom: '2%',
                        right: '1%',
                    }}>
                    {isSmallScreen ? ('Review Book'):('Review {bookById?.bookName}')}
                   
                </Button>
            </Link>
        </>
    );
}

export default BookPageDetails;
