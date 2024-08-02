// BookRecommendation
import styles from './BookRecommendation.module.css';

// models
import { Book } from '../models/Book';

// dependencies
import { Container, Image, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';

// hooks
import { useResponsive } from '../hooks/useResponsive';


// define props
interface BookRecommendationProp {
    book: Book;
};

function BookRecommendation({book}: BookRecommendationProp) {
    const { isSmallScreen } = useResponsive(); // for mobile
    const theme = useMantineTheme();

    return (
        <Container 
            className={styles.bookRecommendationDisplay}
            w={isSmallScreen ? ('40vw'): ('100%')}
            style={{backgroundColor: theme.colors.darkGrey[0]}}
        >
            {book && (
                <Link to={`/books/${book?.bookId}`} aria-label={`Link to recommended book: ${book?.bookName}`}>
                    <Image 
                        alt={`${book?.bookName} cover image`}
                        src={book.coverImageL} 
                        radius="md" 
                        height='100%'/>
                </Link>
            )}
        </Container>
       
    );
}

export default BookRecommendation;
