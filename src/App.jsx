//import { useState } from 'react'
import React  from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'
import Dashboard from './pages/Dashboard'
import Profile  from './pages/Profile';
import PrivateRoute from './Components/PrivateRoute';
import AdminPanel from './pages/AdminPanel';
import ClientHome from './layout/ClientHome';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientHome />,
    errorElement: <ErrorPage />,
    children: [
      {
       index: true,
       element: <Home />,
     },
     {
       path: '/login',
       element: <Login />,
     },
      {
       path: '/contact',
       element: <Contact />,
     }
    
    ]
  },
  {
    element: <PrivateRoute />, // This acts as a layout for protected routes
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/admin',
        element: <AdminPanel />, // This could have further authorization checks
      },
    ],
  },
]);

function App() {
// const [count, setCount] = useState(0)

 
   
      return <RouterProvider router={router} />; 
    
    
  
}

export default App
