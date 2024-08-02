// style
import styles from './RecommendationCollection.module.css';
import BookRecommendation from './BookRecommendation';

// dependencies
import { Flex, ScrollArea, useMantineTheme } from '@mantine/core';

// models and hooks
import { Book } from '../models/Book';
import { useResponsive } from '../hooks/useResponsive';


// take in a list of books as a prop
interface RecommendationCollectionProps {
    books: Book[];
};

const RecommendationCollection: React.FC<RecommendationCollectionProps> = ({ books }) => {
    const { isSmallScreen } = useResponsive(); // mobile view checker
    const theme = useMantineTheme(); // theme checker

    // render differently if on desktop
    if (!isSmallScreen){
        return (
            <div style={{backgroundColor: theme.colors.mediumGrey[0]}}>
                <Flex className={styles.bookRecommendationContainer}>
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

    // mobile render
    return (
        <ScrollArea w='375px' h='100%'>
            <Flex className={styles.bookRecommendationContainer}>
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
