// BookRecommendation.jsx
import '../styles/colours.css';
import './BookRecommendation.moduel.css';

import { Container, Image, Rating } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useBooks } from '../hooks/useBooks';




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
                <>
                    <div className='ratingOverlay'>
                    <Rating  color="var(--colour-primary" value={4} readOnly size="1.1vw" />
                    </div>
                    <Image src={bookById.coverImageL} width='100%' radius="md"/>
                </>
            )}
        </Container>
    );
}

export default BookRecommendation;
