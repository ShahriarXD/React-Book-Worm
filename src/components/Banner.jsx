import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8 md:mt-12">
      <div className="hero bg-[#1313130D] rounded-3xl p-8 md:p-20 py-16">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full p-0">
          <img
            src="https://cdn2.penguin.com.au/covers/original/9780593686447.jpg"
            className="w-1/2 md:w-auto max-w-sm rounded-[5px] shadow-2xl lg:ml-20"
            alt="Hero Book"
          />
          <div className="text-center md:text-left mt-8 md:mt-0 flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-[#131313] font-serif leading-[1.3] mb-6 md:mb-12">
              Books to freshen up your bookshelf
            </h1>
            <Link
              to="/listed-books"
              className="btn bg-[#23BE0A] hover:bg-[#1f9f08] text-white border-none px-7 py-3 h-auto min-h-0 font-bold text-xl rounded-xl"
            >
              View The List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
