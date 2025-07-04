
// import './style.css';


const BookDetails = ({ bookInfo }) => {
  if (!bookInfo) return null;
  return (
  <>
  <div className="book-card bg-white p-4 rounded-lg border border-gray-300 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
  <img
    src={bookInfo.imgUrl}
    alt="author"
    className="images-cover w-[350px] h-[200px] object-cover rounded"
  />
  <div className="card-details mt-4 space-y-1">
    <h2 className="card-title text-xl font-semibold text-[red]">{bookInfo.title}</h2>
    <h3 className="card-author text-black">{bookInfo.author}</h3>
    <span className="card-category text-sm text-blue-600">{bookInfo.category}</span>
    {/* <p className="card-rating text-yellow-500">{bookInfo.ratings}</p> */}
    <p className="card-parag text-gray-700 text-[15px]">{bookInfo.description}</p>
    <p className="viewlink text-blue-700 hover:underline cursor-pointer hover:text-amber-700">View More</p>
  </div>
</div>


  </>

  )
}

export default BookDetails;