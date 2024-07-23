import '../styles/colours.css';
import './WriteReview.moduel.css';

import { Flex, Text, Image, Textarea, Rating, CloseButton, Button, Notification } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import { Link } from 'react-router-dom';
import { useReviews } from '../hooks/useReviews';
import useAuth from '../hooks/useAuth';
import { Review } from '../models/Review';
import { useParams } from 'react-router-dom';


function WriteReview() {
    // book id parsed in through url
    // test with example 209770
    const { bookid } = useParams();
    const numericId = Number(bookid);

    // define constants
    const [hasFetchedBook, setHasFetchedBook] = useState(false);
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState<number | null>(null);
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);

    // get constants from hooks
    const { fetchBookById, bookById } = useBooks();
    const { reviewPosted, postReview } = useReviews();
    const { currentUser, authenticated } = useAuth();

    // get the book being reviewed
    useEffect(() => {
        if (!hasFetchedBook) {
            fetchBookById(numericId);
            setHasFetchedBook(true);
        }
    }, [hasFetchedBook, fetchBookById]);

    // notify user when review posted succesfully 
    useEffect(() => {
        if (reviewPosted) {
            setShowSuccessNotification(true);
            setTimeout(() => setShowSuccessNotification(false), 3000);
        } 
    }, [reviewPosted]);

    // post review when button clicked
    const handlePostReview = async () => {
        console.log(currentUser);
        if (rating != null && description !== '' && bookById != null && currentUser != null) {
            // define review
            const newReview: Review = {
                bookId: bookById.bookId,
                userId: currentUser.userId,
                rating: rating,
                description: description
            };
            await postReview(newReview);
        } else {
            console.log('Invalid Review');
        }
    };

    // render page
    return (
        <>
            {showSuccessNotification && (
                <Notification
                    ml='1%'
                    color = 'var(--colour-primary-gradient)'
                    mr='1%'
                    style={{
                        backgroundColor: 'var(--colour-primary)',
                        fontWeight: 'bold',
                    }}           

                    onClose={() => setShowSuccessNotification(false)}
                >
                    Succesfully Posted Review
                </Notification>
            )}
            <div className='write-review-container light-grey'>
                <Flex>
                    <Link to={`/books/${bookById?.bookId}`} style={{ textDecoration: 'none' }}>
                        <Image src={bookById?.coverImageL} />
                    </Link>
                    <div className='write-review-form'>
                        <Flex justify='space-between' align='center'>
                            <Text className='brand-colour-fonts' fw={700} size='2.5vw'>
                                {bookById?.bookName}
                            </Text>
                            
                            <Link to={`/books/${bookById?.bookId}`} state={{ fromBackButton: true }}>
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
                                variant="outline"
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
