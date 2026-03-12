import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 border border-[#13131326] p-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300">
        <figure className="bg-[#F3F3F3] rounded-2xl py-8 mb-6 h-[230px]">
          <img
            src={image}
            alt={bookName}
            className="h-full object-contain drop-shadow-md"
          />
        </figure>
        <div className="flex flex-col flex-grow">
          <div className="flex flex-wrap gap-3 mb-4">
            {tags.map((tag, index) => (
              <div key={index} className="px-4 py-1.5 bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-[14px] font-medium leading-[normal]">
                {tag}
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-[#131313] mb-4 font-serif">
            {bookName}
          </h2>
          <p className="text-[#131313CC] font-medium mb-5">By : {author}</p>
          
          {/* Using flex-grow to push footer to the bottom */}
          <div className="flex-grow"></div>

          <div className="border-t border-dashed border-[#13131326] w-full my-5"></div>
          <div className="flex justify-between items-center text-[#131313CC] font-medium">
            <span>{category}</span>
            <span className="flex items-center gap-2">
              {rating.toFixed(2)}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
