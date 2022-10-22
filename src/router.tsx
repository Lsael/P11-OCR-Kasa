import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';
import App from './App';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
  ]);
