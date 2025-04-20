import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or may have been moved.
        </p>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
        >
          <FaArrowLeft className="w-4 h-4" />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
