import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
      loader={getContactsLoader}
      action={createContactAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route
          index
          element={<Index />}
        />
        <Route
          path='contacts/:contactId'
          element={<Contact />}
          loader={getContactLoader}
          action={favoriteContactAction}
        />
        <Route
          path='contacts/:contactId/edit'
          element={<EditContact />}
          loader={getContactLoader}
          action={editContactAction}
        />
        <Route
          path='contacts/:contactId/destroy'
          action={deleteContactAction}
        />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
