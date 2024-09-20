import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Details from './pages/Details/Details.jsx';
import Register from './pages/Register/Register.jsx';
import CustomModal from './pages/Components/Modal/Modal.jsx';
import NotFound from './pages/not-found/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/edit",
    element: <CustomModal />,
  },
  {
    path: "*",
    element: <NotFound />,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
