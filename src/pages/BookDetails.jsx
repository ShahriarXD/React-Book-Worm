import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getStoredBooks, saveBook } from "../utils/localStorage";
import { toast } from "react-toastify";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("/bookData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.find((b) => b.bookId === parseInt(id));
        setBook(foundBook);
      });
  }, [id]);

  const handleRead = () => {
    const isSaved = saveBook("read-books", parseInt(id));
    if (isSaved) {
      toast.success("Book added to Read list successfully");
    } else {
      toast.error("You have already read this book");
    }
  };

  const handleWishlist = () => {
    const readBooks = getStoredBooks("read-books");
    if (readBooks.includes(parseInt(id))) {
      toast.error("You have already read this book, can not add to Wishlist");
      return;
    }
    const isSaved = saveBook("wishlist-books", parseInt(id));
    if (isSaved) {
      toast.success("Book added to Wishlist successfully");
    } else {
      toast.error("Book is already in your Wishlist");
    }
  };

  if (!book) return <div className="text-center py-24 text-2xl font-bold font-serif min-h-[50vh] flex items-center justify-center">Loading...</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 mt-8 md:mt-12 mb-24 flex flex-col lg:flex-row gap-12 text-[#131313]"
    >
      <div className="bg-[#1313130D] rounded-3xl p-10 flex-1 flex justify-center items-center min-h-[400px] md:min-h-[500px]">
        <img
          src={book.image}
          alt={book.bookName}
          className="max-w-[80%] max-h-[80%] drop-shadow-2xl object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <h1 className="text-[40px] font-bold font-serif mb-4 leading-tight">
          {book.bookName}
        </h1>
        <p className="text-xl font-medium text-[#131313CC] mb-6 border-b border-[#13131326] pb-6">
          By : {book.author}
        </p>
        <p className="text-xl font-medium text-[#131313CC] border-b border-[#13131326] pb-6 mb-6">
          {book.category}
        </p>

        <p className="text-[#131313B2] leading-7 mb-7">
          <span className="font-bold text-[#131313]">Review :</span> {book.review}
        </p>

        <div className="flex items-center gap-4 mb-8 border-b border-[#13131326] pb-8 flex-wrap">
          <span className="font-bold text-[#131313]">Tag</span>
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-1.5 rounded-full text-base font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-12 font-medium mb-8">
          <div className="flex flex-col gap-3 text-[#131313B2]">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="flex flex-col gap-3 font-semibold">
            <p>{book.totalPages}</p>
            <p>{book.publisher}</p>
            <p>{book.yearOfPublishing}</p>
            <p>{book.rating}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={handleRead}
            className="px-7 py-[18px] min-h-0 border border-[#1313134D] hover:bg-[#1313130D] text-[#131313] font-bold text-lg rounded-xl transition"
          >
            Read
          </button>
          <button 
            onClick={handleWishlist}
            className="px-7 py-[18px] min-h-0 bg-[#50B1C9] hover:bg-[#4396aa] text-white font-bold text-lg rounded-xl flex border-none transition"
          >
            Wishlist
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookDetails;
