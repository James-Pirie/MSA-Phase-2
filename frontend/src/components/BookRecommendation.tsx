// BookRecommendation
import './BookRecommendation.moduel.css';

import { Book } from '../models/Book';

import { Container, Image, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useResponsive } from '../hooks/useResponsive';



interface BookRecommendationProp {
    book: Book;

};

function BookRecommendation({book}: BookRecommendationProp) {
    const { isSmallScreen } = useResponsive();
    const theme = useMantineTheme();



    return (
        <Container 
            className='bookRecommendationDisplay' 
            w={isSmallScreen ? ('40vw'): ('100%')}
            style={{backgroundColor: theme.colors.darkGrey[0]}}
        >
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
