// react
import React from 'react'
import ReactDOM from 'react-dom/client'

// style
import './styles/index.css'

// dependancies
import NotFound from './components/NotFound.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

// pages
import HomePage from './pages/HomePage.tsx'
import LoginPage from './pages/LoginPage.tsx'



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
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <MantineProvider>
        <RouterProvider router={router}/>
      </MantineProvider>
    </React.StrictMode>
)
