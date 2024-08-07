// dependencies
import { Rating, Image, Flex, Text, Center, useMantineTheme } from '@mantine/core';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// style
import styles from './RandomReview.module.css';

// hooks
import { useBooks } from '../hooks/useBooks';
import { useReviews } from '../hooks/useReviews';
import { useAuthors } from '../hooks/useAuthors';
import { useUsers } from '../hooks/useUsers';
import { useResponsive } from '../hooks/useResponsive';

const RandomReview = () => {
  const { fetchBookById, bookById, bookByIdLoading } = useBooks();
  const { fetchRandomReview, review, randomReviewLoading } = useReviews();
  const { fetchAuthorById, author } = useAuthors();
  const { fetchUserById, user } = useUsers();
  const { isSmallScreen } = useResponsive();

  const [hasFetchedReview, setHasFetchedReview] = useState(false);
  const [hasFetchedBook, setHasFetchedBook] = useState(false);
  const [hasFetchedAuthor, setHasFetchedAuthor] = useState(false);
  const [hasFetchedUser, setHasFetchedUser] = useState(false);
  const hasFetchedReviewRef = useRef(false);

  const theme = useMantineTheme();  // theme checker

  // get a random review from the database
  useEffect(() => {
    if (!hasFetchedReviewRef.current) {
      fetchRandomReview();
      hasFetchedReviewRef.current = true;
      setHasFetchedReview(true);
    }
  }, []);

  // get the book associated with the review
  useEffect(() => {
    if (review?.bookId && !hasFetchedBook && !randomReviewLoading && hasFetchedReview) {
      fetchBookById(review.bookId);
      setHasFetchedBook(true);
    }
  }, [hasFetchedReview, randomReviewLoading]);

  // get the author of the book associated with the review
  useEffect(() => {
    if (bookById?.authorId && !hasFetchedAuthor && !bookByIdLoading && hasFetchedBook) {
      fetchAuthorById(bookById.authorId);
      setHasFetchedAuthor(true);
    }
  }, [hasFetchedBook, bookByIdLoading]);

  // get the user associated with the review
  useEffect(() => {
    if (review?.userId && !hasFetchedUser && hasFetchedReview && !randomReviewLoading) {
      fetchUserById(review.userId);
      setHasFetchedUser(true);
    }
  }, [hasFetchedReview, randomReviewLoading]);

  // if not on mobile
  if(!isSmallScreen){
    return (
      <div className={styles.reviewContainer} style={{backgroundColor: theme.colors.darkGrey[0]}}>
        <Flex align="flex-start">
          <Link to={`books/${bookById?.bookId}`} aria-label={`Link to ${bookById?.bookName} page`}>
            <Image
              alt={`${bookById?.bookName} cover image`}
              radius="md"
              fit="contain"
              src={bookById?.coverImageL}
              className={styles.bookCover}
            />
          </Link>

          <div className={styles.reviewDetails}>
            <Link 
              aria-label={`Link to ${bookById?.bookName} page`}
              to={`books/${bookById?.bookId}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Text fw={700} size="2.5vw" c={theme.colors.brandGreen[0]} className={`${styles.bookTitle} ${styles.truncate}`}>
                {bookById?.bookName}
              </Text>
            </Link>
            <Text fw={500} mt='0' size="1.3vw" c={theme.colors.lightGrey[0]} className={styles.authorName}>
              By {author?.authorName &&
                author.authorName
                  .toLowerCase()
                  .split(' ')
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}
            </Text>
            <Rating className={styles.rating} color={theme.colors.ratingGreen[0]} value={review?.rating} readOnly size="xl" />
            <Text fw={400} size="xl" c={theme.colors.lightGrey[0]} className={styles.bookDescription} lineClamp={10}>
              {review?.description}
            </Text>
            <Link 
                aria-label={`Link to user ${user?.userName}'s profile`}
                to={`/profile/${user?.userId}`}  
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Text c={theme.colors.brandGreen[0]} className={styles.reviewAuthor}>
                Review by: {user?.userName}
              </Text>
            </Link>
          </div>
        </Flex>
      </div>
    );
  };
  // mobile layout
  return(
    <div className={styles.reviewContainerMobile} style={{backgroundColor: theme.colors.darkGrey[0]}}>
          <Link to={`books/${bookById?.bookId}`} aria-label={`Link to ${bookById?.bookName} page`}>
            <Image
              alt={`${bookById?.bookName} cover image`}
              radius="30px"
              height='480vw'
              src={bookById?.coverImageL}
            />
          </Link>
          <Center>
            <Rating className={styles.rating} color={theme.colors.ratingGreen[0]} value={review?.rating} readOnly size="16vw" />
          </Center>

          <Center>
            <Text fw={500} size="xl" c={theme.colors.lightGrey[0]} lineClamp={6}>
                {review?.description}
            </Text>
          </Center>

          <Text 
            c={theme.colors.brandGreen[0]} 
            className={styles.reviewAuthor}
            mt='2%'>
                Review by: {user?.userName}
          </Text>


    </div>
  )
};

export default RandomReview;
