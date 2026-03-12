import { useState, useEffect } from "react";
import ListedBookCard from "../components/ListedBookCard";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { getStoredBooks } from "../utils/localStorage";

const ListedBooks = () => {
  const [allData, setAllData] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // 0 for Read, 1 for Wishlist

  // Fetch all books initial data
  useEffect(() => {
    fetch("/bookData.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  // Update displayed books based on selected tab when allData or activeTab changes
  useEffect(() => {
    if (allData.length > 0) {
      if (activeTab === 0) {
        // Read Books
        const storedIds = getStoredBooks("read-books");
        const readBooks = allData.filter((b) => storedIds.includes(b.bookId));
        setDisplayBooks(readBooks);
      } else {
        // Wishlist Books
        const storedIds = getStoredBooks("wishlist-books");
        const wlBooks = allData.filter((b) => storedIds.includes(b.bookId));
        setDisplayBooks(wlBooks);
      }
    }
  }, [allData, activeTab]);

  const handleSort = (sortType) => {
    let sortedBooks = [...displayBooks];
    if (sortType === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortType === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    setDisplayBooks(sortedBooks);
    setDropdownOpen(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-4 mt-8"
    >
      <div className="bg-[#1313130D] rounded-xl py-8 mb-8">
        <h2 className="text-3xl font-bold font-serif text-center text-[#131313]">
          Books
        </h2>
      </div>

      <div className="flex justify-center mb-14 relative">
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="btn bg-[#23BE0A] hover:bg-[#1f9f08] border-none text-white px-8 font-semibold text-lg flex items-center gap-2 h-auto py-3 min-h-0"
          >
            Sort By <IoIosArrowDown className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </div>
          {dropdownOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute top-14 left-1/2 -translate-x-1/2"
            >
              <li>
                <button onClick={() => handleSort("rating")}>Rating</button>
              </li>
              <li>
                <button onClick={() => handleSort("pages")}>Number of pages</button>
              </li>
              <li>
                <button onClick={() => handleSort("year")}>Publisher year</button>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="flex items-center gap-0 border-b border-[#1313134D] mb-8 overflow-x-auto whitespace-nowrap">
        <button 
          onClick={() => setActiveTab(0)}
          className={`px-6 py-4 font-medium transition-colors cursor-pointer ${
            activeTab === 0 
              ? "text-[#131313CC] border border-b-0 border-[#1313134D] rounded-t-lg bg-base-100 relative top-px bg-white" 
              : "text-[#13131380] border-b border-transparent"
          }`}
        >
          Read Books
        </button>
        <button 
          onClick={() => setActiveTab(1)}
          className={`px-6 py-4 font-medium transition-colors cursor-pointer ${
            activeTab === 1 
              ? "text-[#131313CC] border border-b-0 border-[#1313134D] rounded-t-lg bg-base-100 relative top-px bg-white" 
              : "text-[#13131380] border-b border-transparent"
          }`}
        >
          Wishlist Books
        </button>
      </div>

      <div className="flex flex-col mb-24">
        {displayBooks.map((book) => (
          <ListedBookCard key={book.bookId} book={book} />
        ))}
      </div>
    </motion.div>
  );
};

export default ListedBooks;
