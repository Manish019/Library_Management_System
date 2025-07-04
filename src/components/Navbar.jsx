import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
    
   <div className="w-full fixed top-0 z-50">
  <nav className="bg-blue-600 text-white px-4 py-3 shadow flex justify-between items-center">
    <Link to="/" className="text-xl font-bold">📚 Online Library</Link>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/book-category" className="hover:underline">Browse Books</Link>
      <Link to="/addbook" className="hover:underline">Add Book</Link>
    </div>
  </nav>
</div>


    </>
  );
}

export default Navbar;
