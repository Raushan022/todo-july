import React from "react";

const TodoCard = ({ todo }) => {
  return (
    <div className="border border-gray-300 rounded-2xl p-4 shadow-md bg-white hover:shadow-lg transition duration-200">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400 font-mono">ID: {todo.id}</span>
        <span className="text-sm text-purple-600 font-semibold bg-purple-100 px-2 py-0.5 rounded-full">
          {todo.tag || "No Tag"}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-1">{todo.title}</h3>
      <p className="text-gray-600">{todo.description}</p>
    </div>
  );
};

export default TodoCard;
