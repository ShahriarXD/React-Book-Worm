import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/bookData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-24 mb-32">
      <h2 className="text-[40px] font-bold text-center text-[#131313] mb-10 font-serif">
        Books
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
