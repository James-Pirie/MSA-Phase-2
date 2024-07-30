import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import router from './router.tsx';
import { ThemeProvider } from './contexts/themeContext.tsx';
import { useTheme } from './hooks/useTheme.ts'

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
