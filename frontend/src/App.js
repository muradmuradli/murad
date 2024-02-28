import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Error,
  FirstPage,
  SignIn,
  SignUp,
  Recommended,
  DashboardLayout,
  Profile,
  AllScientists,
  Admin
} from './pages';

const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <FirstPage />,
        },
        {
          path: 'signin',
          element: <SignIn />,
        },
        {
          path: 'signup',
          element: <SignUp />,
        },
        {
          path: 'dashboard',
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <Recommended />,
            },
            {
              path:"profile",
              element:<Profile></Profile>
            },
            {
              path:"allscientists",
              element:<AllScientists></AllScientists>
            },
            {
              path:"admin",
              element:<Admin></Admin>
            }
            
          ],
        },
      ],
    },
  ]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
