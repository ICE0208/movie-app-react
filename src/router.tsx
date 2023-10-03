import { Navigate, createBrowserRouter } from 'react-router-dom';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
