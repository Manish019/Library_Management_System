

import BookAllCategory from "./BrowseBooks";

// const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "Romance"];

function Home() {
  return (
    <>
    
    <div className="max-w-[1000px] mx-auto px-4 pt-20">
  {/* Welcome Message */}
  <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
    Welcome to the Online Library System 📚
  </h1>
  <BookAllCategory className="mx-auto p-4 mt-2" />
</div>

    
    </>
  );
}

export default Home;
