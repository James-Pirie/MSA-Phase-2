// BookRecommendation
import '../styles/colours.css';
import './BookRecommendation.moduel.css';

import { Book } from '../models/Book';

import { Container, Image } from '@mantine/core';
import { Link } from 'react-router-dom';

interface BookRecommendationProp {
    book: Book;

};

function BookRecommendation({book}: BookRecommendationProp) {

    return (
        <Container className='bookRecommendationDisplay white'>
            {book && (
                <Link to={`/books/${book?.bookId}`} aria-label={`Link to recommended book: ${book?.bookName}`}>

                    <div className='ratingOverlay'>
                    </div>
                    <Image src={book.coverImageL} width='100%' radius="md" height='250vw'/>
                </Link>
            )}
        </Container>
       
    );
}

export default BookRecommendation;
