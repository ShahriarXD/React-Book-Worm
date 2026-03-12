import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Root;
