import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addTodo } from "../redux/slices/todoSlice";

const Home = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const [errors, setErrors] = useState({
    titleError: "",
    descriptionError: "",
  });

  //handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for the specific field while typing
    setErrors((prev) => ({ ...prev, [`${name}Error`]: "" }));
  };

  const errorValidation = (data) => {
    const newErrors = {};

    if (data.title.trim() === "") {
      newErrors.titleError = "Title is required";
    }

    if (data.description.trim() === "") {
      newErrors.descriptionError = "Description is required";
    }

    setErrors(newErrors);
    return newErrors;
  };

  //handle submit
  const handleAddTodo = () => {
    const validate = errorValidation(formData);
    if (Object.keys(validate).length) return;

    dispatch(addTodo(formData));
    console.log(formData);

    //add success toast message
    toast.success("Todo added successfully!!");

    //reset form
    setFormData({
      title: "",
      description: "",
      tag: "",
    });
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
        {errors.titleError && (
          <span className="text-red-700">{errors.titleError}</span>
        )}
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
        {errors.descriptionError && (
          <span className="text-red-700">{errors.descriptionError}</span>
        )}
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
