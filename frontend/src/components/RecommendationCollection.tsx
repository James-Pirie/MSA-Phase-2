import '../styles/colours.css';
import './RecommendationCollection.moduel.css'

import BookRecommendation from './BookRecommendation'

import { Flex } from '@mantine/core';


function RecommendationCollection() {
    return(
        <div className='light-grey'>
            <Flex className='bookRecommendationContainer'>
                <BookRecommendation/>
                <BookRecommendation/>
                <BookRecommendation/>
                <BookRecommendation/>
                <BookRecommendation/>
                <BookRecommendation/>
                <BookRecommendation/>
                <BookRecommendation/>
            </Flex>
        </div>
    )

}

export default RecommendationCollection;
