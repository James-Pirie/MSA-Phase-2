// BookRecommendation
import './BookRecommendation.moduel.css';

import { Book } from '../models/Book';

import { Container, Image } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useResponsive } from '../hooks/useResponsive';



interface BookRecommendationProp {
    book: Book;

};

function BookRecommendation({book}: BookRecommendationProp) {
    const { isSmallScreen } = useResponsive();


    return (
        <Container className='bookRecommendationDisplay white' w={isSmallScreen ? ('40vw'): ('100%')} >
            {book && (
                <Link to={`/books/${book?.bookId}`} aria-label={`Link to recommended book: ${book?.bookName}`}>
                    <Image 
                        src={book.coverImageL} 
                        radius="md" 
                        height='100%'/>
                </Link>
            )}
        </Container>
       
    );
}

export default BookRecommendation;
