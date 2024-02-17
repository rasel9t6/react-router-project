import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root.jsx';
import ErrorPage from './Error.jsx';
import Contact from './Contact.jsx';
import {
  getContactLoader,
  getContactsLoader,
} from './loaders/contactLoader.js';
import { createContactAction } from './actions/createContactAction.js';
import EditContact from './EditContact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        path: '/contacts/:contactId',
        element: <Contact />,
        loader: getContactLoader,
      },
      {
        path: '/contacts/:contactId/edit',
        element: <EditContact />,
        loader: getContactLoader,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
