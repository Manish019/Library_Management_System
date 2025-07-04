import { Link } from "react-router-dom";
import { useRouteError } from 'react-router-dom';


function NotFound() {
const err = useRouteError();


  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Go to Home Page
      </Link>
    </div>
  );
}

export default NotFound;
