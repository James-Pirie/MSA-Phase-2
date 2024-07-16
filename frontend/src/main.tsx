// react
import React from 'react'
import ReactDOM from 'react-dom/client'

// components
import Home from './components/Home.tsx'
import Header from './components/Header.tsx'
import SubHeader from './components/SubHeader.tsx'
import GradientBackground from './components/GradientBackground.tsx'
import RecommendationCollection from './components/RecommendationCollection.tsx'

// style
import './styles/index.css'

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
      <SubHeader/>
      <GradientBackground/>
      <RecommendationCollection/>

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
