import '../styles/colours.css';
import './RecommendationCollection.moduel.css'; // Corrected import for CSS module
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
                    <BookRecommendation book={book} />
                ))}
            </Flex>
        </div>
    );
}

export default RecommendationCollection;
