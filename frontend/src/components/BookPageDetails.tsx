import './BookPageDetails.moduel.css';

import ReviewScroll from './ReviewsScroll';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import { Image, Text, Container, Flex, CloseButton, Button, Rating, Stack, useMantineTheme } from '@mantine/core';
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

    const theme = useMantineTheme();

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
            <div className='small-green-line' style={{backgroundColor: theme.colors.brandGreen[0]}}></div>
            <div className='title' style={{backgroundColor: theme.colors.darkGrey[0]}}>
                <Flex justify='space-between' align='center'>
                    <Stack 
                        gap="0"
                        w='100%'>
                        <Text 
                            c={theme.colors.brandGreen[0]}
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
                            color={theme.colors.brandGreen[0]}
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
                        background: theme.other.primaryGradient,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ReviewScroll reviews={reviewsForBook}/>

                </Container>
            ):(
                <Flex>
                    <div className='book-details-sidebar' style={{backgroundColor: theme.colors.darkGrey[0]}}>
                        <Image src={bookById?.coverImageL} width='100%' />

                        <Rating mt='5%' color={theme.colors.brandGreen[0]} value={bookRatingById} readOnly size="2vw" />

                        <Text className='author-name' fw={600} size='1.5vw' c={theme.colors.brandGreen[0]}>
                            By {author?.authorName && author.authorName
                                .toLowerCase()
                                .split(' ')
                                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                                .join(' ')}
                        </Text>


                        <Text className='author-name' c={theme.colors.brandGreen[0]} fw={600} size='1.5vw'>
                            Published {bookById?.year}
                        </Text>
                    </div>

                    <Container
                        style={{
                            minWidth: '80%',
                            minHeight: '80vh',
                            background: theme.other.primaryGradient,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ReviewScroll reviews={reviewsForBook}/>

                    </Container>
                </Flex>
            )}

            <Link to={authenticated ? (`/newreview/${bookById?.bookId}`): ('/login')}>
                <Button
                    c={theme.colors.darkGrey[0]}
                    color={theme.colors.brandGreen[0]}
                    variant="filled"
                    size="lg"
                    radius='lg'
                    style={{
                        position: 'fixed',
                        bottom: '2%',
                        right: '1%',
                    }}>
                    {isSmallScreen ? ('Review Book'):(`Review ${bookById?.bookName}`)}
                   
                </Button>
            </Link>
        </>
    );
}

export default BookPageDetails;
