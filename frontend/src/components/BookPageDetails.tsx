// style
import styles from './BookPageDetails.module.css';

// components
import ReviewScroll from './ReviewsScroll';

// dependencies
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Image, Text, Container, Flex, CloseButton, Button, Rating, Stack, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';

// hooks
import { useAuthors } from '../hooks/useAuthors';
import { useReviews } from '../hooks/useReviews';
import { useBooks } from '../hooks/useBooks';
import { useResponsive } from '../hooks/useResponsive';
import useAuth from '../hooks/useAuth';


function BookPageDetails() {
    // book id parsed in through url
    const { bookid } = useParams();
    const { authenticated } = useAuth();

    // convert string param to number
    const numericId = Number(bookid);

    // constants
    const { fetchAuthorById, author } = useAuthors();
    const { fetchBookById, bookById, fetchBookAverageRating, bookRatingById } = useBooks();
    const { fetchReviewsForBook, reviewsForBook } = useReviews();
    const { isSmallScreen } = useResponsive();

    const [hasFetchedBook, setHasFetchedBook] = useState(false);
    const [hasFetchedAverageRating, setHasFetchedAverageRating] = useState(false);
    const [hasFetchedAuthor, setHasFetchedAuthor] = useState(false);
    const [hasFetchedReviewsForBook, setHasFetchedReviewsForBook] = useState(false);

    const theme = useMantineTheme(); // for theme change

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


    // fetch the average rating for a book
    useEffect(() => {
        if (!hasFetchedAverageRating && bookById != null) {
            fetchBookAverageRating(bookById?.bookId)
            setHasFetchedAverageRating(true);
        }
    }, [bookById]);


    return (
        <>
            <div className={styles.smallGreenLine} style={{backgroundColor: theme.colors.brandGreen[0]}}></div>
            <div className={styles.title} style={{backgroundColor: theme.colors.darkGrey[0]}}>
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
                            color={theme.colors.ratingGreen[0]}
                            value={bookRatingById} 
                            readOnly 
                            size="5vw" />
                        )}
                    </Stack>

                    <Link className={styles.closeButton} to='/books' state={{ fromBackButton: true }}>
                        <CloseButton size='xl' aria-label="Go to books section"/>
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
                    <div className={styles.bookDetailsSidebar} style={{backgroundColor: theme.colors.darkGrey[0]}}>
                        <Image src={bookById?.coverImageL} width='100%' />

                        <Rating mt='5%' color={theme.colors.ratingGreen[0]} value={bookRatingById} readOnly size="2vw" />

                        <Text className={styles.authorName} fw={600} size='1.5vw' c={theme.colors.brandGreen[0]}>
                            By {author?.authorName && author.authorName
                                .toLowerCase()
                                .split(' ')
                                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                                .join(' ')}
                        </Text>


                        <Text className={styles.authorName} c={theme.colors.brandGreen[0]} fw={600} size='1.5vw'>
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
                    aria-label={`Write Review for ${bookById?.bookName} if logged in`}
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
