import '../styles/colours.css';
import './BookPageDetails.moduel.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import { Image, Text, Container, ScrollArea, Flex, CloseButton, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useAuthors } from '../hooks/useAuthors';
import { useReviews } from '../hooks/useReviews';

import ReviewLink from './ReviewLink';

function BookPageDetails() {
    // book id parsed in through url
    // test with example 209770
    const { bookid } = useParams();
    const numericId = Number(bookid);
    const { fetchAuthorById, author } = useAuthors();
    const { fetchBookById, bookById } = useBooks();
    const { fetchReviewsForBook, reviewsForBook } = useReviews();

    const [hasFetchedBook, setHasFetchedBook] = useState(false);
    const [hasFetchedAuthor, setHasFetchedAuthor] = useState(false);
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
    const [hasFetchedReviewsForBook, setHasFetchedReviewsForBook] = useState(false);
    const [visibleReviews, setVisibleReviews] = useState(8);

    // get the book from the bookid param
    useEffect(() => {
        if (!hasFetchedBook) {
            fetchBookById(numericId);
            setHasFetchedBook(true);
        }
    }, [hasFetchedBook, fetchBookById]);

    // Fetch the author of the book
    useEffect(() => {
        if (bookById?.authorId && !hasFetchedAuthor) {
            fetchAuthorById(bookById.authorId);
            setHasFetchedAuthor(true);
        }
    }, [bookById?.authorId, hasFetchedAuthor, fetchAuthorById]);

    // get the reviews for the bookid param
    useEffect(() => {
        if (!hasFetchedReviewsForBook) {
            fetchReviewsForBook(numericId);
            setHasFetchedReviewsForBook(true);
        }
    }, [hasFetchedReviewsForBook, fetchReviewsForBook]);

    // update visible reviews when scroll position changes
    useEffect(() => {
        if (scrollPosition.y >= 200) {
            setVisibleReviews((previous) => previous + 2);
        }
    }, [scrollPosition.y]);

    return (
        <>
            <div className='small-green-line brand-colour'></div>
            <div className='title light-grey'>
                <Flex justify='space-between' align='center'>
                    <Text className='brand-colour-fonts' fw={700} size='2.5vw' lineClamp={1}>
                        {bookById?.bookName} ({bookById?.year})
                    </Text>

                    <Link className='close-button' to='/' state={{ fromBackButton: true }}>
                        <CloseButton size='xl' />
                    </Link>
                </Flex>
            </div>

            <Flex>
                <div className='book-details-sidebar light-grey'>
                    <Image src={bookById?.coverImageL} width='100%' />

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
                    <ScrollArea
                        w='100%'
                        h='80vh'
                        onScrollPositionChange={setScrollPosition}>
                        {reviewsForBook.slice(0, visibleReviews).map((review) => (
                            <ReviewLink key={review.reviewId ?? 0} reviewId={review.reviewId ?? 0} />
                        ))}
                    </ScrollArea>
                </Container>
            </Flex>
            <Link to={`/newreview/${bookById?.bookId}`}>
                <Button
                    color='var(--colour-primary)'
                    variant="filled"
                    size="lg"
                    radius='lg'
                    style={{
                        position: 'fixed',
                        bottom: '2%',
                        right: '1%',
                    }}>
                    Review {bookById?.bookName}
                </Button>
            </Link>
        </>
    );
}

export default BookPageDetails;
