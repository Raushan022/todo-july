import React, { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "",
  });

  //handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //handle submit
  const handleAddTodo = () => {
    console.log(formData);
  };

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
          name="title"
          placeholder="Enter Title"
          onChange={handleChange}
          value={formData.title}
          className=" text-gray-700 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="description"
          placeholder="Enter Description"
          rows="3"
          onChange={handleChange}
          value={formData.description}
          className=" text-gray-700 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        ></textarea>
      </div>

      {/* Tag */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tag
        </label>
        <input
          type="text"
          name="tag"
          placeholder="Enter Tag (e.g., Work)"
          onChange={handleChange}
          value={formData.tag}
          className=" text-gray-700 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200"
        onClick={handleAddTodo}
      >
        ➕ Add Todo
      </button>
    </div>
  );
};

export default Home;
