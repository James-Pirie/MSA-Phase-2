// react
import React from 'react'
import ReactDOM from 'react-dom/client'

// dependancies
import NotFound from './components/NotFound.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


// pages
import HomePage from './pages/HomePage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import AllBooksPage from './pages/AllBooksPage.tsx'
import WriteReviewPage from './pages/WriteReviewPage.tsx'
import BookPage from './pages/BookPage.tsx'


const router = createBrowserRouter([{
  path: '/',
  Component: () => (
    <HomePage/>
  ),
  errorElement: <NotFound/>
  },
  {
    path: '/login',
    Component: () => (
      <LoginPage/>
    ),
    errorElement: <NotFound/>
  },
  {
    path: '/profile/:userId',
    Component: () => (
      <ProfilePage/>
    ),
    errorElement: <NotFound/>
  },
  {
    path: '/books',
    Component: () => (
      <AllBooksPage/>
    ),
    errorElement: <NotFound/>
  },
  {
    path: '/newreview/:bookid',
    Component: () => (
      <WriteReviewPage/>
    ),
    errorElement: <NotFound/>
  },
  {
    path: '/books/:bookid',
    Component: () => (
      <BookPage/>
    ),
    errorElement: <NotFound/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <MantineProvider>
        <RouterProvider router={router}/>
      </MantineProvider>
    </React.StrictMode>
)
