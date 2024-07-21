// BookRecommendation
import '../styles/colours.css';
import './BookRecommendation.moduel.css';

import { Container, Image, Rating } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import { Link } from 'react-router-dom';


function BookRecommendation() {
    const { fetchBookById, bookById } = useBooks();
    const [hasFetchedBook, setHasFetchedBook] = useState(false);

    // Attempt to fetch book
    useEffect(() => {
        if (!hasFetchedBook) {
            fetchBookById(209770);
            setHasFetchedBook(true);
        }
    }, [hasFetchedBook, fetchBookById]);

    return (
        <Container className='bookRecommendationDisplay white'>
            {bookById && (
                <Link to={`books/${bookById?.bookId}`} aria-label={`Link to recommended book: ${bookById?.bookName}`}>

                    <div className='ratingOverlay'>
                    <Rating  color="var(--colour-primary" value={4} readOnly size="1.1vw" />
                    </div>
                    <Image src={bookById.coverImageL} width='100%' radius="md"/>
                </Link>
            )}
        </Container>
       
    );
}

export default BookRecommendation;
