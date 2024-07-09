import { useBooks } from '../hooks/useBooks'

function Home() {
  const { books, loading, error } = useBooks();

  return <><h1>Home Page</h1></>;
}

export default Home;
