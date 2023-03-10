import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { MainPage, ReservationsPage } from '../pages';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/main" replace />,
    },
    {
      path: '/main',
      element: <MainPage />,
    },
    {
      path: '/reservations',
      element: <ReservationsPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
