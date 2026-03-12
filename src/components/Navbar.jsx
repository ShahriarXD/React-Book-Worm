import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A] font-semibold bg-transparent hover:bg-transparent"
              : "text-[rgba(19,19,19,0.8)] font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listed-books"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A] font-semibold bg-transparent hover:bg-transparent"
              : "text-[rgba(19,19,19,0.8)] font-semibold"
          }
        >
          Listed Books
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto px-4 mt-4 md:mt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold text-[#131313] font-serif">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 text-base">{links}</ul>
      </div>
      <div className="navbar-end gap-2 md:gap-4">
        <Link to="/login" className="btn bg-[#23BE0A] text-white hover:bg-[#1f9f08] border-none px-4 md:px-7 font-semibold text-sm md:text-base">
          Sign In
        </Link>
        <Link to="/signup" className="btn bg-[#59C6D2] text-white hover:bg-[#4ba8b3] border-none px-4 md:px-7 font-semibold text-sm md:text-base">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
