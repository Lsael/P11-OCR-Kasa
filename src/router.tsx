import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import Home from './pages/Home'
import About from './pages/About';
import Product from './pages/Product';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to='accueil' />,
      errorElement: <ErrorPage />,
    },
    {
      path: "accueil",
      element: <Home />,
      errorElement: <ErrorPage />,
      index: true
    },
    {
      path: "logements/:id",
      element: <Product />,
      errorElement: <ErrorPage />
    },
    {
      path: "a-propos",
      element: <About />,
      errorElement: <ErrorPage />
    },
  ]);
  
