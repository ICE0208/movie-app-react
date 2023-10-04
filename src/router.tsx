import { Navigate, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import { ComingSoon, NowPlaying, Popular } from './routers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Popular />,
        children: [
          {
            path: ':movieId',
            element: null,
          },
        ],
      },
      {
        path: 'coming-soon',
        element: <ComingSoon />,
        children: [
          {
            path: ':movieId',
            element: null,
          },
        ],
      },
      {
        path: 'now-playing',
        element: <NowPlaying />,
        children: [
          {
            path: ':movieId',
            element: null,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to="/"></Navigate>,
      },
    ],
  },
]);

export default router;
