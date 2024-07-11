import { useBooks } from '../hooks/useBooks'

function Home() {
  const { allBooks, loadingAll, errorAll } = useBooks();

  if (loadingAll) {
      return <div>Loading...</div>;
  }

  if (errorAll) {
      return <div>Error: {errorAll}</div>;
  }

  return (
      <div>
          <h2>Book List</h2>
          <ul>
              {allBooks.map(book => (
                  <li key={book.bookId}>
                      {book.bookName} 
                  </li>
              ))}
          </ul>
      </div>
);
}

export default Home;
