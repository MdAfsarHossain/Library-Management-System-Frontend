import { Frown } from "lucide-react";
import { Link } from "react-router";

export const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      {/* <Helmet> */}
      {/* <title>Library Management System || Error Page</title> */}
      {/* </Helmet> */}

      {/* Icon */}
      <Frown className="h-20 w-20 text-blue-600 mb-4" />

      {/* Status Code */}
      <h1 className="text-6xl font-bold text-blue-700">404</h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-2 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        ⬅ Go Back Home
      </Link>
    </div>
  );
};
