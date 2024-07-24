import { Rating, Image, Flex, Text } from '@mantine/core';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import './RandomReview.moduel.css';
import '../styles/colours.css';

import { useBooks } from '../hooks/useBooks';
import { useReviews } from '../hooks/useReviews';
import { useAuthors } from '../hooks/useAuthors';
import { useUSers } from '../hooks/useUsers';

const RandomReview = () => {
  const { fetchBookById, bookById, bookByIdLoading } = useBooks();
  const { fetchRandomReview, review, randomReviewLoading } = useReviews();
  const { fetchAuthorById, author } = useAuthors();
  const { fetchUserById, user } = useUSers();

  const [hasFetchedReview, setHasFetchedReview] = useState(false);
  const [hasFetchedBook, setHasFetchedBook] = useState(false);
  const [hasFetchedAuthor, setHasFetchedAuthor] = useState(false);
  const [hasFetchedUser, setHasFetchedUser] = useState(false);
  const hasFetchedReviewRef = useRef(false);

  // get a random review from the database
  useEffect(() => {
    if (!hasFetchedReviewRef.current) {
      console.log("getting review");
      fetchRandomReview();
      hasFetchedReviewRef.current = true;
      setHasFetchedReview(true);
    }
  }, []);

  // get the book associated with the review
  useEffect(() => {
    if (review?.bookId && !hasFetchedBook && !randomReviewLoading && hasFetchedReview) {
      console.log("getting book");
      fetchBookById(review.bookId);
      setHasFetchedBook(true);
    }
  }, [hasFetchedReview, randomReviewLoading]);

  // get the author of the book associated with the review
  useEffect(() => {
    if (bookById?.authorId && !hasFetchedAuthor && !bookByIdLoading && hasFetchedBook) {
      console.log("getting author");
      fetchAuthorById(bookById.authorId);
      setHasFetchedAuthor(true);
    }
  }, [hasFetchedBook, bookByIdLoading]);

  // get the user associated with the review
  useEffect(() => {
    if (review?.userId && !hasFetchedUser && hasFetchedReview && !randomReviewLoading) {
      console.log("getting user");
      fetchUserById(review.userId);
      setHasFetchedUser(true);
    }
  }, [hasFetchedReview, randomReviewLoading]);

  return (
    <div className="review-container light-grey">
      <Flex align="flex-start">
        <Link to={`books/${bookById?.bookId}`}>
          <Image
            radius="md"
            fit="contain"
            src={bookById?.coverImageL}
            className="book-cover"
          />
        </Link>

        <div className="review-details">
          <Link 
            to={`books/${bookById?.bookId}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Text fw={700} size="2.5vw" c="var(--colour-secondary)" className="book-title truncate">
              {bookById?.bookName}
            </Text>
          </Link>
          <Text fw={500} size="1.3vw" c="var(--lighter-grey)" className="author-name">
            By {author?.authorName &&
              author.authorName
                .toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}
          </Text>
          <Rating className="rating" color="var(--colour-primary)" value={review?.rating} readOnly size="xl" />
          <Text fw={400} size="xl" c="var(--lighter-grey)" className="book-description" lineClamp={10}>
            {review?.description}
          </Text>
          <Text c="var(--colour-secondary)" className="review-author">
            Review by: {user?.userName}
          </Text>
        </div>
      </Flex>
    </div>
  );
};

export default RandomReview;
