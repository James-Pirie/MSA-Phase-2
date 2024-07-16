import { Rating, Image, Flex, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

import './RandomReview.moduel.css';
import '../styles/colours.css'

import { useBooks } from '../hooks/useBooks';
import { useReviews } from '../hooks/useReviews';
import { useAuthors } from '../hooks/useAuthors';
import { useUSers } from '../hooks/useUsers';

const RandomReview = () => {
  const { fetchBookById, bookById } = useBooks();
  const { fetchRandomReview, review } = useReviews();
  const { fetchAuthorById, author } = useAuthors();
  const { fetchUserById, user } = useUSers();


  const [hasFetchedReview, setHasFetchedReview] = useState(false);
  const [hasFetchedBook, setHasFetchedBook] = useState(false);
  const [hasFetchedAuthor, setHasFetchedAuthor] = useState(false);
  const [hasFetchedUser, setHasFetchedUser] = useState(false);



  // attempt to fetch a random review from db
  useEffect(() => {
    if (!hasFetchedReview) {
      fetchRandomReview();
      setHasFetchedReview(true);
    }
  }, [hasFetchedReview, fetchRandomReview]);

  // attempt to fetch book associated with review
  useEffect(() => {
    // check the review has already been fetched
    if (review?.bookId) {
      fetchBookById(review?.bookId);
      setHasFetchedBook(true);
    }
  }, [hasFetchedBook, fetchBookById]);

  // fetch author of book associated with review
  useEffect(() => {
    if (!hasFetchedAuthor) {
      // make sure book has already been fetched
      if (bookById?.authorId) {
        fetchAuthorById(bookById?.authorId);
        setHasFetchedAuthor(true);
      }
  }
  }, [hasFetchedReview, fetchAuthorById]);
  
  // attempt to fetch the user associated with the review
  useEffect(() => {
    if (!hasFetchedUser) {
      // make sure review has already been fetched
      if (review?.userId) {
        fetchUserById(review?.userId);
        setHasFetchedUser(false);
        
      }
  }
  }, [hasFetchedUser, fetchUserById]);

  return (
    <div className="review-container light-grey">
      <Flex align="flex-start">
        <Image
          radius="md"
          fit="contain"
          src={bookById?.coverImageL}
          className='book-cover'
        />
          <div className="review-details">
            <Text fw={700} size="2.5vw" c="var(--colour-secondary)" className="book-title">{bookById?.bookName}</Text>
            <Text fw={500} size="1.3vw" c="var(--lighter-grey)" className="author-name">By { author?.authorName }</Text>
            <Rating className="rating" color="var(--colour-primary" value={review?.rating} readOnly size="xl" />
            <Text fw={400} size="xl" c="var(--lighter-grey)" className='book-description' lineClamp={10}>{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}{review?.description}</Text>
            <Text c="var(--colour-secondary)" className='review-author'>Review by: { user?.userName }</Text>
       
          </div>
      </Flex>
    </div>
  );
};

export default RandomReview;
