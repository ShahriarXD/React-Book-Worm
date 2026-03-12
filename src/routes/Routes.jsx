import { createHashRouter } from "react-router-dom";
import Root from "../pages/Root.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from "../pages/Home.jsx";
import Books from "../pages/Books.jsx";
import ListedBooks from "../pages/ListedBooks.jsx";
import BookDetails from "../pages/BookDetails.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";

const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "books",
        Component: Books,
      },
      {
        path: "listed-books",
        Component: ListedBooks,
      },
      {
        path: "book/:id",
        Component: BookDetails,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
