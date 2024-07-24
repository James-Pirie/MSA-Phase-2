import '../styles/colours.css';
import './RecommendationCollection.moduel.css';
import { Book } from '../models/Book';

import BookRecommendation from './BookRecommendation';

import { Flex } from '@mantine/core';

interface RecommendationCollectionProps {
    books: Book[];
};

const RecommendationCollection: React.FC<RecommendationCollectionProps> = ({ books }) => {
    return (
        <div className='light-grey'>
            <Flex className='bookRecommendationContainer'>
                {books.map(book => (
                    <BookRecommendation 
                        key={book.bookId}
                        book={book}
                    />
                ))}
            </Flex>
        </div>
    );
}

export default RecommendationCollection;
