// components
import Header from '../components/Header.tsx'
import SubHeader from '../components/SubHeader.tsx'
import GradientBackground from '../components/GradientBackground.tsx'
import RecommendationCollection from '../components/RecommendationCollection.tsx'
import { useMantineTheme } from '@mantine/core';

import { useBooks } from '../hooks/useBooks.ts'

function HomePage() {
    const theme = useMantineTheme();

    const { mostReviewedBooks } = useBooks();

    return (
        <div style={{ backgroundColor: theme.colors.darkGrey[0], minHeight: '100vh' }}>

            <Header/>
            <SubHeader/>
            <GradientBackground/>
            <RecommendationCollection books={mostReviewedBooks}/>
        </div>
    )
}

export default HomePage;
