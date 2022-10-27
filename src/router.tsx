import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';
import App from './App';
import Home from './pages/Home'
import About from './pages/About';
import Lodging from './pages/Product';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children : [
        {
          path: "accueil",
          index: true,
          element: <Home />,
          errorElement: <ErrorPage />
        },
        {
          path: "logements/:id",
          element: <Lodging />,
          errorElement: <ErrorPage />
        },
        {
          path: "a-propos",
          element: <About />,
          errorElement: <ErrorPage />
        },
      ]
    },
  ]);
