import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import { BookContext } from "../pages/BookContext";
import { useSelector } from 'react-redux';
// import BookDetails from './BookDetails';

const BookInformation = () => {
  const params = useParams();
  // const { books } = useContext(BookContext);
const books = useSelector((state) => state.books.books);
  // Find the book by ID from the context
  const book = books.find((book) => String(book.id) === params.id);

  if (!book) return <p>Book not found.</p>;

  return (
    <>
   <div className="container max-w-[800px] mx-auto p-4 mt-20">
  <div className="book-info flex flex-col md:flex-row gap-6">
    <img
      src={book.imgUrl}
      alt={book.title}
      className="images-cover rounded shadow-md"
      width="300"
      height="250"
    />
    <div className="card-details space-y-2">
      <h2 className="card-title text-2xl font-semibold">{book.title}</h2>
      <h3 className="card-author text-lg text-gray-600">{book.author}</h3>
      <span className="card-category text-sm text-blue-600">{book.category}</span>
      {/* <p className="card-rating text-yellow-500">{book.ratings || '⭐ Not Rated'}</p> */}
      <p className="card-parag text-gray-700">{book.description}</p>
    </div>
  </div>
</div>

  
     {/* <BookDetails bookInfo={book} /> */}
    
    
    </>
  );
};

export default BookInformation;
