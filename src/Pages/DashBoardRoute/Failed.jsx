import { Link } from "react-router-dom";

const Failed = () => {
  return (
    <div className="h-[89.5vh] flex justify-center items-center ">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center">
          {/* Warning Icon */}
          <div className="mb-4">
            <svg
              className="w-16 h-16 text-red-500 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.29 3.86L1.82 18A2 2 0 003.72 21h16.56a2 2 0 001.9-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4m0 4h.01"
              />
            </svg>
          </div>
          {/* Header */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Oops! Something Went Wrong
          </h2>
          <p className="text-gray-600 mb-6">
            We couldn't complete your payment. Please try again.
          </p>
          {/* Retry Button */}
          <Link to="/dashboard/dashboard">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg w-full transition duration-200">
              Try Again
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Failed;
