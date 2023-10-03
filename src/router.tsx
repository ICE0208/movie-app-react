import { Navigate, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: null,
    children: [
      {
        path: '',
        element: null,
      },
      {
        path: 'coming-soon',
        element: null,
      },
      {
        path: 'now-playing',
        element: null,
      },
      {
        path: '*',
        element: <Navigate to="/"></Navigate>,
      },
    ],
  },
]);

export default router;
