import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompleted } from "../redux/slices/todoSlice";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleCompleted(todo.id));
  };
  return (
    <div className="border border-gray-300 rounded-2xl p-4 shadow-md bg-white hover:shadow-lg transition duration-200">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400 font-mono">ID: {todo.id}</span>
        <span className="text-sm text-purple-600 font-semibold bg-purple-100 px-2 py-0.5 rounded-full">
          {todo.tag || "No Tag"}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3
            className={`text-xl font-semibold mb-1 ${
              todo.isCompleted ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.title}
          </h3>
          <p
            className={`${
              todo.isCompleted ? "line-through text-gray-400" : "text-gray-600"
            }`}
          >
            {todo.description}
          </p>
        </div>

        <div className="pr-4">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={handleCheckboxChange}
            className="w-5 h-5 accent-purple-600"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
