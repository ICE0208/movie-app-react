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
      },
      {
        path: 'coming-soon',
        element: <ComingSoon />,
      },
      {
        path: 'now-playing',
        element: <NowPlaying />,
      },
      {
        path: '*',
        element: <Navigate to="/"></Navigate>,
      },
    ],
  },
]);

export default router;
