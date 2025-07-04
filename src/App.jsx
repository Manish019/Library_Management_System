// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import BrowseBooks from "./pages/BrowseBooks";
// import BookDetails from "./pages/BookDetails";
// import AddBook from "./pages/AddBook";
// import NotFound from "./pages/NotFound";
// import Header from "./components/Header"
import { Outlet } from "react-router-dom"

import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />


      </div>

      </>

  );
}

export default App;
