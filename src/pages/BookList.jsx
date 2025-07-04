import React, {useState, useEffect } from "react";
// import { BookContext } from "../pages/BookContext.jsx";
import BookDetails from "./BookDetails";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookList = () => {
  // const { books } = useContext(BookContext);
const books = useSelector((state) => state.books.books);


  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books || []);

  useEffect(() => {
    // Reset filtered books when book context changes
    setFilteredBooks(books);
  }, [books]);

  const handleSearch = () => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const truncate = (str, n) => {
    return str.split(" ").slice(0, n).join(" ") + (str.split(" ").length > n ? "..." : "");
  };

  return (
   <div className="search-box p-4 max-w-6xl mx-auto mt-6">
    
    <div className="search-box p-4 max-w-4xl mx-auto mt-6 pt-15">

  <h2 className="text-2xl font-semibold mb-4">Search Books</h2>
  <div className="search-inner flex items-center gap-2 mb-6">
    <input
      type="text"
      placeholder="Search by title"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="flex-1 px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      onClick={handleSearch}
      className="search-btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Search
    </button>
  </div>
  </div>

<div className="w-full px-4 sm:px-6 lg:px-10">
  <div className="bookList grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {filteredBooks.length === 0 ? (
      <p className="text-red-600">No books found.</p>
    ) : (
      filteredBooks.map((data) => (
        <Link to={`/book-details/${data.id}`} key={data.id}>
          <BookDetails
            bookInfo={{ ...data, description: truncate(data.description, 20) }}
          />
        </Link>
      ))
    )}
  </div>
</div>
</div>

  );
};

export default BookList;
