import { Container } from '@mantine/core';
import { useBooks } from '../hooks/useBooks';
import { useReviews } from '../hooks/useReviews';
import { useEffect, useState } from 'react';

const RandomReview = () => {
  const { fetchBookById, bookById, errorId } = useBooks();
  const { fetchRandomReview, review, error } = useReviews();
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (!hasFetched) {
      fetchRandomReview();
      setHasFetched(true);
    }
  }, [hasFetched, fetchRandomReview]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (errorId) {
    return <div>Error: {errorId}</div>;
  }

  return (
    <Container>
      <div>
        <h2>{review?.description}</h2>
      </div>
    </Container>
  );
};

export default RandomReview;
