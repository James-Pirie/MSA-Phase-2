import '../styles/colours.css';
import './RecommendationCollection.moduel.css';
import BookRecommendation from './BookRecommendation';

import { Flex, ScrollArea } from '@mantine/core';
import { Book } from '../models/Book';
import { useResponsive } from '../hooks/useResponsive';

interface RecommendationCollectionProps {
    books: Book[];
};

const RecommendationCollection: React.FC<RecommendationCollectionProps> = ({ books }) => {
    const { isSmallScreen } = useResponsive();

    if (!isSmallScreen){
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
    };

    return (
        <ScrollArea className='light-grey' w='375px' h='100%'>
            <Flex className='bookRecommendationContainer'>
                {books.map(book => (
                    <BookRecommendation 
                        key={book.bookId}
                        book={book}
                    />
                ))}
            </Flex>
        </ScrollArea>
    );

}

export default RecommendationCollection;
