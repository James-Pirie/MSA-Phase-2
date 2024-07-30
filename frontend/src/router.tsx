import { createBrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound.tsx';
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import AllBooksPage from './pages/AllBooksPage.tsx';
import WriteReviewPage from './pages/WriteReviewPage.tsx';
import BookPage from './pages/BookPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: () => <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    Component: () => <LoginPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/profile/:userId',
    Component: () => <ProfilePage />,
    errorElement: <NotFound />,
  },
  {
    path: '/books',
    Component: () => <AllBooksPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/newreview/:bookid',
    Component: () => <WriteReviewPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/books/:bookid',
    Component: () => <BookPage />,
    errorElement: <NotFound />,
  },
]);

export default router;
