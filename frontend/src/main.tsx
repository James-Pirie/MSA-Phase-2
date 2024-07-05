import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.tsx'
import NotFound from './components/NotFound.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


const router = createBrowserRouter([{
  path: '/',
  Component: Home,
  errorElement: <NotFound/>
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <MantineProvider>
        <RouterProvider router={router}/>
      </MantineProvider>
    </React.StrictMode>
)
