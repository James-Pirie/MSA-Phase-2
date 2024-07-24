// components
import Header from '../components/Header.tsx'
import SubHeader from '../components/SubHeader.tsx'
import GradientBackground from '../components/GradientBackground.tsx'
import RecommendationCollection from '../components/RecommendationCollection.tsx'

import { useBooks } from '../hooks/useBooks.ts'

function HomePage() {
    const { mostReviewedBooks } = useBooks();

    return (
        <>
            <Header/>
            <SubHeader/>
            <GradientBackground/>
            <RecommendationCollection books={mostReviewedBooks}/>
        </>
    )
}

export default HomePage;
