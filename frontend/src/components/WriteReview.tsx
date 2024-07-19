import '../styles/colours.css';
import './WriteReview.moduel.css';
import { Flex, Text, Image, Textarea, Rating, CloseButton, Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import { Link } from 'react-router-dom';
import { useReviews } from '../hooks/useReviews';
import useAuth from '../hooks/useAuth';
import { Review } from '../models/Review';

function WriteReview() {
    const [hasFetchedBook, setHasFetchedBook] = useState(false);
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState<Number | null>(null);

    const { fetchBookById, bookById } = useBooks();
    const { reviewPosted, errorPost, postReview } = useReviews();
    const { currentUser, authenticated } = useAuth();

    useEffect(() => {
        if (!hasFetchedBook) {
            fetchBookById(209770);
            setHasFetchedBook(true);
        }
    }, [hasFetchedBook, fetchBookById]);

    const handlePostReview = async () => {
        console.log(currentUser)
        if (rating != null && description !== '' && bookById != null && currentUser != null) {
            const newReview: Review = {
                bookId: 209770,
                userId: 2,
                rating: 4,
                description: description
            };
            await postReview(newReview);
        }else{
            console.log('Invalid Review')
        }
    };

    return (
        <>
            <div className='write-review-container light-grey'>
                <Flex>
                    <Image src={bookById?.coverImageL} />
                    <div className='write-review-form'>
                        <Flex justify='space-between' align='center'>
                            <Text className='brand-colour-fonts' fw={700} size='2.5vw'>
                                {bookById?.bookName}
                            </Text>
                            <Link to='/' state={{ fromBackButton: true }}>
                                <CloseButton size='xl' />
                            </Link>
                        </Flex>
                        <Rating 
                            className='rating-input' 
                            color='var(--colour-primary)' 
                            size='xl'    
                            mb='1%'
                            onChange={(value) => setRating(value)} 
                            readOnly={!authenticated} 
                        />
                        <Textarea
                            onChange={(e) => setDescription(e.target.value)} 
                            aria-label='Review Content Input'
                            placeholder='Write Review'
                            withAsterisk
                            rows={15}
                            disabled={!authenticated}
                            styles={() => ({
                                input: {
                                    backgroundColor: 'var(--colour-primary-gradient)',
                                    borderColor: 'var(--lighter-grey)',
                                    color: 'var(--lighter-grey)',
                                    '::placeholder': {
                                        color: 'var(--lighter-grey)',
                                    },
                                }
                            })}
                        />
                        <Flex justify='flex-end'>
                            <Button 
                                onClick={handlePostReview} 
                                mt='1%' 
                                size='md' 
                                variant='filled' 
                                color='var(--colour-primary)'
                                disabled={!authenticated}
                            >
                                Post Review
                            </Button>
                        </Flex>
                    </div>
                </Flex>
            </div>
        </>
    );
}

export default WriteReview;
