import { Link } from "react-router-dom";

const Books = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Books Page</h2>
      <p className="mb-4">This demonstrates React Router navigation.</p>
      <Link to="/" className="btn btn-secondary">
        Back to Home
      </Link>
    </div>
  );
};

export default Books;
