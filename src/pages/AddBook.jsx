import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addBook } from "../utils/bookSlice";
// import './addbook.css'
import { addBook } from "../utils/booksSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !category || !description || !imageUrl) return;

    dispatch(
      addBook({
        id: Date.now(),
        title,
        author,
        category,
        description,
        imgUrl: imageUrl,
      })
    );

    setTitle("");
    setAuthor("");
    setCategory("");
    setDescription("");
    setImageUrl("");
    alert("Book added successfully!");
  };

  return (
    <>
      <h2 className="form-title">Add a New Book</h2>

  
   <form
  onSubmit={handleSubmit}
  className="add-book-form max-w-[800px] mx-auto bg-[#155dfc] p-6 rounded-lg shadow-md space-y-4 mt-11"
>
  <h2 className="form-title text-3xl font-bold text-white text-center mb-4">
    Add a New Book
  </h2>

  <input
    type="text"
    className="form-input w-full border border-gray-300 text-black bg-amber-50 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Book Title"
    value={title}
    onChange={e => setTitle(e.target.value)}
    required
  />

  <input
    type="text"
    className="form-input w-full border border-gray-300 text-black bg-amber-50 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Author"
    value={author}
    onChange={e => setAuthor(e.target.value)}
    required
  />

  <input
    type="text"
    className="form-input w-full border border-gray-300 text-black bg-amber-50 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Category"
    value={category}
    onChange={e => setCategory(e.target.value)}
    required
  />

  <textarea
    className="form-input w-full border border-gray-300 text-black bg-amber-50 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Description"
    value={description}
    onChange={e => setDescription(e.target.value)}
    required
  />

  <input
    type="text"
    className="form-input w-full border border-gray-300 text-black bg-amber-50 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Image URL"
    value={imageUrl}
    onChange={e => setImageUrl(e.target.value)}
    required
  />

  <button
    type="submit"
    className="flex justify-center  cursor-pointer submit-btn w-[100px] mx-auto bg-black text-white py-2 rounded hover:bg-gray-700 transition duration-300"
  >
    Add Book
  </button>
</form>

  </>
  );
};

export default AddBook;