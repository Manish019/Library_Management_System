import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StrictMode } from "react";
// import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
// import {bookStore} from './utils/bookStore.js'; // ✅ Correct
import NoteFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import AddBook from "./pages/AddBook.jsx";
import BookInformation from './pages/BookInformation.jsx';
import BookAllCategory from './pages/BrowseBooks.jsx';
import bookStore from './utils/bookStore.js'


// createing Browser router

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

       {
        path:"/",
        element: <Home />
      },
       {
        path: "/book-details/:id",
        element: <BookInformation />,
      },
    
     
      { path: "/addBook", 
        element: <AddBook />
       }, // <-- Add this line

        { path: "/book-category",
           element: <BookAllCategory /> }, // <-- Add this line
      // ...other routes...
    ],
    errorElement: <NoteFound />,
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={bookStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>

);
