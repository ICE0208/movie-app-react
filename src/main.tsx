import ReactDOM from 'react-dom/client';
import Globalstyle from './GlobalStyle.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const client = new QueryClient();

root.render(
  <>
    <Globalstyle />
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </>,
);
