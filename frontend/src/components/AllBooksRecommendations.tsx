import '../styles/colours.css'
import RecommendationCollection from './RecommendationCollection';

import { Container, Text } from '@mantine/core';
import { useBooks } from '../hooks/useBooks';
import { useResponsive } from '../hooks/useResponsive';


function AllBooksRecommendations() {
    const { mostReviewedBooks, highestRatedBooks } = useBooks();
    const { isSmallScreen } = useResponsive();

    return (
        <>
            <Container pl='2%' m='0' w={'100%'} h={'7vh'} style={{display: 'flex', alignItems: 'center'}}>
                <Text 
                    fw={600} 
                    size={isSmallScreen ? ('5vw'):('1.5vw')} 
                    c={'var(--colour-primary)'}
                >
                    Highest Rated Books
                </Text>
            </Container>

            <RecommendationCollection books={highestRatedBooks}/>

            <Container pl='2%' m='0' w={'100%'} h={'7vh'} style={{display: 'flex', alignItems: 'center'}}>
                <Text 
                    fw={600} 
                    size={isSmallScreen ? ('5vw'):('1.5vw')} 
                    c={'var(--colour-primary)'}
                >
                    Most Reviewed Books
                </Text>
            </Container>

            <RecommendationCollection books={mostReviewedBooks}/>
        </>
    )
}

export default AllBooksRecommendations;
