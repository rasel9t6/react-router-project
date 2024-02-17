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
import {
  createContactAction,
  deleteContactAction,
  editContactAction,
  favoriteContactAction,
} from './actions/createContactAction.js';
import EditContact from './EditContact.jsx';
import Index from './Index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: '/contacts/:contactId',
        element: <Contact />,
        loader: getContactLoader,
        action: favoriteContactAction,
      },
      {
        path: '/contacts/:contactId/edit',
        element: <EditContact />,
        loader: getContactLoader,
        action: editContactAction,
      },
      {
        path: '/contacts/:contactId/destroy',
        action: deleteContactAction,
        errorElement: (
          <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
          </div>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
