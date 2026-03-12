import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineUsers, HiOutlineDocumentText } from "react-icons/hi2";

const ListedBookCard = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 border border-[#13131326] rounded-2xl mb-6 items-center md:items-stretch">
      <div className="bg-[#1313130D] rounded-2xl flex items-center justify-center p-8 md:w-56 h-auto">
        <img
          src={image}
          alt={bookName}
          className="h-40 object-contain drop-shadow-lg"
        />
      </div>
      <div className="flex-1 flex flex-col w-full text-left">
        <h2 className="text-2xl font-bold font-serif text-[#131313] mb-2">{bookName}</h2>
        <p className="text-[#131313CC] font-medium text-base mb-4">By : {author}</p>
        
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#131313]">Tag</span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-1.5 rounded-full text-base font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-[#131313CC] flex items-center gap-2">
            <HiOutlineLocationMarker className="text-xl" />
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>

        <div className="flex items-center gap-4 text-[#13131399] mb-4 pb-4 border-b border-[#13131326] flex-wrap">
          <p className="flex items-center gap-2">
            <HiOutlineUsers className="text-xl" /> Publisher: {publisher}
          </p>
          <p className="flex items-center gap-2">
            <HiOutlineDocumentText className="text-xl" /> Page {totalPages}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-auto">
          <p className="bg-[#328EFF26] text-[#328EFF] px-5 py-2 rounded-full font-medium">
            Category: {category}
          </p>
          <p className="bg-[#FFAC3326] text-[#FFAC33] px-5 py-2 rounded-full font-medium">
            Rating: {rating}
          </p>
          <Link
            to={`/book/${bookId}`}
            className="bg-[#23BE0A] hover:bg-[#1f9f08] text-white px-5 py-2 rounded-full font-medium transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
