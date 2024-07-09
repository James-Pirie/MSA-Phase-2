import { useBooks } from '../hooks/useBooks'

function Home() {
  const { books, loading, error } = useBooks();

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error}</div>;
  }

  return (
      <div>
          <h2>Book List</h2>
          <ul>
              {books.map(book => (
                  <li key={book.bookId}>
                      {book.bookName} 
                  </li>
              ))}
          </ul>
      </div>
);
}

export default Home;
