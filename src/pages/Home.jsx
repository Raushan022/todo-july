import React from "react";

const Home = () => {
  return (
    <div className="max-w-md mx-auto mt-16 p-8 rounded-2xl shadow-xl bg-white">
      <h1 className="text-2xl text-gray-800 font-bold mb-6 text-center">
        📝 Add New Todo
      </h1>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          placeholder="Enter Title"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          placeholder="Enter Description"
          rows="3"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        ></textarea>
      </div>

      {/* Tag */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tag
        </label>
        <input
          type="text"
          placeholder="Enter Tag (e.g., Work)"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200"
        onClick={() => console.log("hello")}
      >
        ➕ Add Todo
      </button>
    </div>
  );
};

export default Home;
