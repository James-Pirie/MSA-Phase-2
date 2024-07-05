// react
import React from 'react'
import ReactDOM from 'react-dom/client'

// components
import Home from './components/Home.tsx'
import Header from './components/Header.tsx'

// dependancies
import NotFound from './components/NotFound.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


const router = createBrowserRouter([{
  path: '/',
  Component: () => (
    <>
      <Header/>
      <Home/>
    </>
  ),
  errorElement: <NotFound/>
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <MantineProvider>
        <RouterProvider router={router}/>
      </MantineProvider>
    </React.StrictMode>
)
